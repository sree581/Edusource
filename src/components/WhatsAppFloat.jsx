export default function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/919895953159"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600
            w-16 h-16 rounded-full flex items-center justify-center
            shadow-2xl hover:scale-110 transition duration-300"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-8 h-8"
            />
        </a>
    );
}