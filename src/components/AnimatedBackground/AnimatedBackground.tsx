import { Box } from "@mui/material";

export const AnimatedBackground = () => {
    return (
        <Box>
            <svg
                className="BgAnimation__svg"
                viewBox="0 0 800 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" style={{ stopColor: "#111", stopOpacity: 1 }} /> 
                        <stop offset="100%" style={{ stopColor: "#222", stopOpacity: 1 }} />
                    </radialGradient>
                </defs>
                <circle cx="200" cy="200" r="150" fill="url(#grad1)">
                    <animate 
                        attributeName="cx" 
                        values="200;600;200" 
                        dur="12s" 
                        repeatCount="indefinite" 
                    />
                    <animate 
                        attributeName="cy" 
                        values="200;600;200" 
                        dur="12s" 
                        repeatCount="indefinite" 
                    />
                </circle>
                <circle cx="600" cy="600" r="100" fill="url(#grad1)">
                    <animate 
                        attributeName="cx" 
                        values="600;200;600" 
                        dur="12s" 
                        repeatCount="indefinite" 
                    />
                    <animate 
                        attributeName="cy" 
                        values="600;200;600" 
                        dur="12s" 
                        repeatCount="indefinite" 
                    />
                </circle>
                <circle cx="400" cy="400" r="50" fill="url(#grad1)">
                    <animate 
                        attributeName="r" 
                        values="50;150;50" 
                        dur="12s" 
                        repeatCount="indefinite" 
                    />
                </circle>
            </svg>
        </Box>
    );
};
