package main

import (
	"fmt"
	"katsu.bio/database"
	"katsu.bio/endpoints"
	"log"
	"net/http"
)

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "*")
		w.Header().Set("Access-Control-Allow-Headers", "*")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func main() {
	if database.Initialize() == true {
		fmt.Println("Database has been initialized successfully.")
		if database.CreateTables() == true {
			fmt.Println("Database tables have been created successfully.")

			http.HandleFunc("/api/blogs", endpoints.HandleBlogs)
			http.HandleFunc("/api/blogs/html", endpoints.HandleBlogsHTML)
			http.HandleFunc("/api/blogs/update", endpoints.UpdateBlogs)

			http.HandleFunc("/api/announcement", endpoints.HandleAnnouncement)

			http.HandleFunc("/api/tags", endpoints.HandleTags)

			http.HandleFunc("/api/login", endpoints.HandleLogin)

			corsHandler := corsMiddleware(http.DefaultServeMux)

			log.Fatal(http.ListenAndServe(":6969", corsHandler))
		} else {
			log.Fatal("Failed to create tables within the database.")
		}
	} else {
		log.Fatal("Database connection could not be established.")
	}
}
