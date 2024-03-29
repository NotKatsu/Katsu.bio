import { BsDiscord, BsGithub, BsFillClockFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { AiFillClockCircle } from 'react-icons/ai'
import { IoMdSettings } from 'react-icons/io'

export const Footer = () => {
    const currentDate = new Date();
    const currentYear: number = currentDate.getFullYear();

	return (
        <div style={{
            marginTop: "auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "none"
        }}>
        <div style={{ textAlign: "center", color: "#fff" }}>

            <a href="mailto:hello@katsu.bio" target="_blank" style={{ color: "#fff", marginLeft: "1rem", fontSize: "24px" }}>
            <MdEmail/>
            </a>

            <a href="https://github.com/NotKatsu/" target="_blank" style={{ color: "#fff", marginLeft: "1rem", fontSize: "23px" }}>
            <BsGithub/>
            </a>

            <a href="https://discord.com/channels/@me/1052982721598738522/" target="_blank" style={{ color: "#fff", marginLeft: "1rem", fontSize: "25px" }}>
            <BsDiscord/>
            </a>

            <a href="https://wakatime.com/@KatsuGoCrazy/" target="_blank" style={{ color: "#fff", marginLeft: "1rem", fontSize: "23px" }}>
            <AiFillClockCircle/>
            </a>

            <a href="/dashboard/login" style={{ color: "#fff", marginLeft: "1rem", fontSize: "23px" }}>
            <IoMdSettings/>
            </a>

            <p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.6)", margin: "0", padding: "0", marginTop: "0.5rem", marginBottom: "1rem" }}>
                Copyright © {currentYear} - Made with ❤️ by Katsu
            </p>
        </div>
        </div>
	);
};
