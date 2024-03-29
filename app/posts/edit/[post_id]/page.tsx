'use client'

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Edit from "../components/edit"

interface Blog {
	blog_id: string;
	blog_title: string;
	blog_description: string;
	blog_tag: string;
}

export default function Page({ params }: { params: { post_id: string } }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const router = useRouter();
  const [blogData, setBlogData] = useState<Blog[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const headers = new Headers();
    headers.append('query', params.post_id);
  
    fetch('https://katsu.bio/api/blogs', {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setBlogData(data.blog_results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.post_id]);

  useEffect(() => {
    const cookies = document.cookie.split(";");
    const usernameCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("username=")
    );
    const passwordCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("password=")
    );

    if (usernameCookie && passwordCookie) {
      fetch("https://katsu.bio/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "username": usernameCookie.split("=")[1],
          "password": passwordCookie.split("=")[1],
        }
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.login_success) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
            router.replace("/dashboard/login");
          }
        })
        .catch((error) => {
          console.error("Login error:", error);
          setIsLoggedIn(false);
          router.replace("/dashboard/login");
        });
    } else {
      setIsLoggedIn(false);
      router.replace("/dashboard/login");
    }
  }, [router]);

  return (
    <div>
      {blogData.slice(0, 1).map((blog) => (
        <div key={blog.blog_id} style={{ marginBottom: "1rem" }}>
          {isLoggedIn === true ? <Edit blog={blog} /> : null}
        </div>
      ))}
    </div>
  );
};
