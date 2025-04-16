function Footer() {
    return <footer className="bg-current-line text-center text-white w-full">
    <div className="pt-9 w-full">
      <div className="mb-9 flex justify-center w-full">
        <a className="mr-9 text-neutral-200" href="https://www.facebook.com/dovy2kaz/" target="_blank" rel="noreferrer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 hover:text-pink hover:-translate-y-3 transition ease-in-out duration-500"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
        </a>

        <a className="mr-9 text-neutral-200" href="https://www.linkedin.com/in/dovy2kas/" target="_blank" rel="noreferrer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 hover:text-pink hover:-translate-y-3 transition ease-in-out duration-500"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
        </a>
        <a className="mr-9 text-neutral-200" href="https://github.com/dovy2kas/" target="_blank" rel="noreferrer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 hover:text-pink hover:-translate-y-3 transition ease-in-out duration-500"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        </a>
        <a className="text-neutral-200" href="mailto:contact@dovydas.tech" target="_blank" rel="noreferrer">
            <svg 
                className="h-8 w-8 hover:text-pink hover:-translate-y-3 transition ease-in-out duration-500"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 75.294 75.294"
                fill="currentColor">
                <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
                    c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
                    H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
                    c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
                    c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
                    c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
                    c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"/>
            </svg>
        </a>
      </div>
    </div>

    <div
      className="bg-current-line p-4 text-center text-white border-t-2 border-purple">
      © 2025 Copyright:
      <a
        className="text-white hover:text-pink transition"
        href="https://dovydas.tech/"
      >dovydas.tech</a>
    </div>
  </footer>
}

export default Footer;