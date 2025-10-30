module.exports = {
	content: [
		"./src/**/*.{html,js,ts,jsx,tsx}",
		"app/**/*.{ts,tsx}",
		"components/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			screens: {
				'xs': '424px',
			},
			colors: {
				'blue-500': 'var(--blue-500)',
				'neutral-300': 'var(--neutral-300)',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				'developer-body-regular-400': 'var(--developer-body-regular-400-font-family)',
				'lawyer-body-small-500': 'var(--lawyer-body-small-500-font-family)',
				sans: [
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
					'Apple Color Emoji"',
					'Segoe UI Emoji"',
					'Segoe UI Symbol"',
					'Noto Color Emoji"'
				]
			},
			boxShadow: {
				'cards-short-default': 'var(--cards-short-default)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'md': '1024px',
				'xl': '1280px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
	darkMode: ["class"],
};
