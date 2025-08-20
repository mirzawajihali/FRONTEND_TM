import { Link } from 'react-router';
import { 
    Facebook, 
    Twitter, 
    Instagram, 
    Linkedin, 
    Mail, 
    Phone, 
    MapPin,
    Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Company',
            links: [
                { name: 'About Us', href: '/about' },
                { name: 'Our Team', href: '/team' },
                { name: 'Careers', href: '/careers' },
                { name: 'News', href: '/news' },
            ],
        },
        {
            title: 'Products',
            links: [
                { name: 'Electronics', href: '/electronics' },
                { name: 'Accessories', href: '/accessories' },
                { name: 'Software', href: '/software' },
                { name: 'Hardware', href: '/hardware' },
            ],
        },
        {
            title: 'Support',
            links: [
                { name: 'Help Center', href: '/help' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Returns', href: '/returns' },
                { name: 'Warranty', href: '/warranty' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Cookie Policy', href: '/cookies' },
                { name: 'Disclaimer', href: '/disclaimer' },
            ],
        },
    ];

    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: '#' },
        { name: 'Twitter', icon: Twitter, href: '#' },
        { name: 'Instagram', icon: Instagram, href: '#' },
        { name: 'LinkedIn', icon: Linkedin, href: '#' },
    ];

    return (
        <footer className="bg-background border-t border-border/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main footer content */}
                <div className="py-12 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                        {/* Company info */}
                        <div className="lg:col-span-4">
                            <Link 
                                to="/" 
                                className="flex items-center space-x-2 text-2xl font-bold mb-4"
                                style={{ color: '#B3EBF2' }}
                            >
                                <div 
                                    className="h-8 w-8 rounded-lg flex items-center justify-center text-white font-bold"
                                    style={{ backgroundColor: '#B3EBF2' }}
                                >
                                    TM
                                </div>
                                <span>TechMart</span>
                            </Link>
                            <p className="text-foreground/70 mb-6 max-w-md">
                                Your trusted partner for cutting-edge technology solutions. 
                                We provide innovative products and exceptional service to help 
                                you stay ahead in the digital world.
                            </p>
                            
                            {/* Contact info */}
                            <div className="space-y-3 text-sm text-foreground/70">
                                <div className="flex items-center space-x-3">
                                    <MapPin className="h-4 w-4 text-[#B3EBF2]" />
                                    <span>123 Tech Street, Digital City, TC 12345</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-4 w-4 text-[#B3EBF2]" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-4 w-4 text-[#B3EBF2]" />
                                    <span>info@techmart.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Footer links */}
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {footerSections.map((section) => (
                                    <div key={section.title}>
                                        <h3 className="text-foreground font-semibold mb-4">
                                            {section.title}
                                        </h3>
                                        <ul className="space-y-3">
                                            {section.links.map((link) => (
                                                <li key={link.name}>
                                                    <Link
                                                        to={link.href}
                                                        className="text-foreground/70 hover:text-foreground transition-colors duration-200 text-sm"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter subscription */}
                <div className="py-8 border-t border-border/40">
                    <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left">
                        <h3 className="text-lg font-semibold text-foreground mb-4">
                            Stay Updated
                        </h3>
                        <p className="text-foreground/70 mb-4 text-sm">
                            Subscribe to our newsletter for the latest tech news and exclusive offers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-[#B3EBF2] focus:border-[#B3EBF2] transition-colors"
                            />
                            <Button 
                                className="whitespace-nowrap text-white"
                                style={{ backgroundColor: '#B3EBF2' }}
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom footer */}
                <div className="py-6 border-t border-border/40">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        {/* Copyright */}
                        <div className="flex items-center space-x-1 text-sm text-foreground/70">
                            <span>© {currentYear} TechMart. Made with</span>
                            <Heart className="h-4 w-4 text-red-500 fill-current" />
                            <span>by our team. All rights reserved.</span>
                        </div>

                        {/* Social links */}
                        <div className="flex items-center space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="text-foreground/70 hover:text-[#B3EBF2] transition-colors duration-200"
                                        aria-label={social.name}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;