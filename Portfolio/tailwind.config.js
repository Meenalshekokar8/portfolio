tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            }, 
            fontFamily:{
                Outfit : ["Outfit", "sans-serif"],
                Ovo: ["ovo", "serif"]
            },
            animation:{
                spin_slow:'spin 6s linear infinite'
            },
            colors:{
                lightHover: '#f0fdf4',
                DarkHover: '#2b5743',
                darkTheme:'#122117'
            },
            boxShadow:{
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
            }
        }
        
    },

    darkMode:'selector'
}