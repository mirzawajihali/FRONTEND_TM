const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                    Welcome to <span style={{ color: '#B3EBF2' }}>Tour Managment King</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                    Your premier destination for cutting-edge technology and innovative solutions.
                    Discover the future of tech with us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button 
                        className="px-8 py-3 rounded-lg text-white font-medium transition-colors duration-200 hover:opacity-90"
                        style={{ backgroundColor: '#B3EBF2' }}
                    >
                        Explore Tours
                    </button>
                    <button className="px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors duration-200">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
