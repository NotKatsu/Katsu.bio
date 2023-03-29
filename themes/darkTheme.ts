import { createTheme } from "@nextui-org/react";

const darkDefaultTheme = createTheme({
    type: "dark",
    theme: {
        fonts: {
            sans: "Rubik, sans-serif",
        },
        colors: {
            black: "#1a1a1a",
            darkGrey: "#2a2a2a",

            error: "#fa313c",
        },
    },
});

export default darkDefaultTheme;