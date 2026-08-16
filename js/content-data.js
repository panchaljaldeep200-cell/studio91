// js/content-data.js - Complete Centralized Content Database for Studio91

const Content = {

    /* ==================================================
       BRAND & GLOBAL
       ================================================== */
    brand: {
        name: "STUDIO91",
        since: "SINCE 2014",
        tagline: "TIMELESS LOVE STORIES BEAUTIFULLY CAPTURED.",
        subTagline: "Luxury Wedding Photography • Cinematic Films • Destination Weddings • Storytelling",
        footerDescription: "Studio91 is a premium wedding photography and cinematic filmmaking brand dedicated to capturing timeless love stories with elegance, emotion, and creativity. From intimate ceremonies to grand destination weddings, we transform beautiful moments into unforgettable memories that last forever.",
        instagram: "https://www.instagram.com/studio91_djoshi/",
        whatsapp: "https://wa.me/919699255507",
        email: "thestudio91productions@gmail.com",
        phone: "+91 96992 55507",
        address: "Studio91 Productions, India",
        copyright: "© 2026 Studio91. All Rights Reserved."
    },


    /* ==================================================
       NAVIGATION
       ================================================== */
    navigation: {
        home: "Home",
        about: "About Us",
        portfolio: "Portfolio",
        portfolioPhotography: "Photography",
        portfolioFilms: "Films",
        portfolioJustUs: "Just Us",
        stories: "Captured Stories",
        plans: "Plans & Pricing",
        contact: "Contact"
    },


    /* ==================================================
       BUTTONS & LABELS
       ================================================== */
    buttons: {
        learnMore: "LEARN MORE",
        viewDetailsPricing: "View Details & Pricing",
        backToPortfolio: "Back to Portfolio",
        backToGallery: "Back to Gallery",
        viewStory: "View Story",
        submit: "SEND MESSAGE",
        submitSuccess: "THANK YOU! MESSAGE SENT.",
        submitError: "SUBMISSION FAILED. PLEASE TRY AGAIN."
    },


    /* ==================================================
       HOME PAGE
       ================================================== */
    home: {
        heroTitle: "TIMELESS LOVE STORIES BEAUTIFULLY CAPTURED.",
        introEyebrow: "STUDIO91 - SINCE 2014",
        introTitle: "Timeless love, told through light.",
        introSub: "Luxury Wedding Photography • Cinematic Films • Destination Weddings • Storytelling",
        
        philosophyEyebrow: "OUR PHILOSOPHY",
        philosophyTitle: "We don't stage love.<br>We witness it.",
        philosophyParagraph1: "For us, photography is listening. It's the quiet art of being present enough to notice a trembling hand, a half-hidden smile, the way light falls on a grandmother's ring.",
        philosophyParagraph2: "We craft frames that feel — images you'll return to not for how they look, but for how they make you remember.",
        philosophyButton: "LEARN MORE",

        servicesTitle: "Our Services",
        services: [
            { title: "Engagement", text: "Celebrating the beginning of your forever.", link: "portfolio-photography.html" },
            { title: "Pre-Wedding", text: "A cinematic prelude to your celebration.", link: "portfolio-justus.html" },
            { title: "Wedding", text: "Comprehensive coverage for your monumental day.", link: "portfolio-photography.html" },
            { title: "Maternity Portraiture", titleShort: "Maternity", text: "Embracing the beautiful anticipation of life.", link: "portfolio-justus.html" }
        ],

        plansTitle: "Our Plans",
        plansCards: [
            { title: "Engagement Packages", desc: "Celebrate the beginning of your forever with elegant engagement photography filled with genuine emotions and joyful moments.", price: "Starting from ₹15,000", link: "plans.html#engagement-packages" },
            { title: "Pre-Wedding Packages", desc: "Romantic and cinematic pre-wedding experiences designed to beautifully showcase your love story and connection.", price: "Starting from ₹30,000", link: "plans.html#pre-wedding-packages" },
            { title: "Wedding Packages", desc: "Luxury wedding photography and cinematic films crafted to capture every emotion, tradition, and unforgettable celebration.", price: "Starting from ₹2,00,000", link: "plans.html#wedding-packages" },
            { title: "Maternity Portraiture", desc: "Graceful and emotional maternity portraits celebrating love, motherhood, and life’s most beautiful journey.", price: "Starting from ₹12,000", link: "plans.html#maternity-portraiture" }
        ],

        quote: "“A thing that you see in my pictures is that I was not afraid to fall in love with these people.”",
        quoteAuthor: "— Annie Leibovitz"
    },


    /* ==================================================
       ABOUT PAGE
       ================================================== */
    about: {
        heroTitle: "About Us",
        introTitle: "Turning Beautiful Moments Into Timeless Memories",
        introText: "At Studio91, we believe weddings are not just events — they are emotional stories filled with love, family, traditions, and unforgettable memories.",

        founderTitle: "The Founder",
        founderName: "Dhruv Joshi",
        founderBio: [
            "Founded by photographer and filmmaker Dhruv Joshi, STUDIO-91 Productions has collaborated with leading organisations including Adani Enterprises, Godrej, Asian Paints, Machinecraft Technologies, and Marwadi Financial Services. Our experience spans boardrooms, manufacturing facilities, luxury venues, and destination celebrations capturing stories that elevate brands and preserve meaningful moments.",
            "We believe that powerful visuals are more than photographs; they are a reflection of identity, craftsmanship, and ambition. By combining creative vision with technical precision, we create imagery that inspires trust, enhances brand perception, and leaves a lasting impression.",
            "From executive portraits and corporate campaigns to luxury weddings and cinematic brand films, our work is guided by a singular philosophy: to create timeless visual experiences that resonate beyond the moment.",
            "At STUDIO-91 Productions, we do not simply document events we craft visual legacies."
        ],
        founderQuote: "Elevating Brands. Capturing Excellence. Creating Timeless Stories.",

        studioTitle: "The Studio",
        studioName: "STUDIO91",
        studioBio: "At STUDIO-91, we believe every wedding is a unique story waiting to be told. With over 10 years of experience and 200+ successful shoots, we specialize in capturing genuine emotions, timeless moments, and cinematic memories. Our approach blends creativity, storytelling, and attention to detail to create photographs and films that couples can cherish for a lifetime. From intimate celebrations to grand destination weddings, we are passionate about preserving your most beautiful moments with elegance and authenticity.",

        testimonialsEyebrow: "Stories of Love",
        testimonialsList: [
            { couple: 'Krishma & Dhiraj', quote: '"These guys have been booked with us since 2019, when our wedding was going to be in Vietnam. They stood by us and made sure their entire team could attend our wedding... Truly we didn\'t want to get married without them and it was the best decision. Their work is outstanding."' },
            { couple: 'Sarah & Michael', quote: '"An intimate coastal ceremony where the ocean witnessed our vows. The team captured the sea breeze and the quiet moments perfectly. We couldn\'t be happier with our album."' },
            { couple: 'Chloe & David', quote: '"A timeless celebration in the heart of a historic city. They guided us so effortlessly throughout the day and the final gallery looks like something out of a luxury magazine."' },
            { couple: 'Olivia & Ethan', quote: '"Soft natural moments, cinematic portraits, and a celebration surrounded by family made this wedding feel warm, elegant, and deeply personal."' },
            { couple: 'Isabella & Noah', quote: '"An unforgettable destination wedding with breathtaking scenery, emotional moments, and a gallery that perfectly reflects their love story."' }
        ]
    },


    /* ==================================================
       PORTFOLIO LANDING PAGE
       ================================================== */
    portfolio: {
        heroTitle: "Portfolio",
        introTitle: "A Collection Of Beautiful Love Stories",
        introText: "Explore timeless moments, emotional celebrations, romantic portraits, and unforgettable memories captured through our lens.",
        segments: {
            photography: "Photography",
            films: "Films",
            justUs: "Just Us"
        }
    },


    /* ==================================================
       PORTFOLIO PHOTOGRAPHY PAGE
       ================================================== */
    portfolioPhotography: {
        breadcrumbParent: "Portfolio",
        breadcrumbCurrent: "Photography",
        title: "PHOTOGRAPHY",
        description: "Capturing timeless wedding moments filled with emotions, elegance, and beautiful celebrations."
    },


    /* ==================================================
       PORTFOLIO FILMS PAGE
       ================================================== */
    portfolioFilms: {
        breadcrumbParent: "Portfolio",
        breadcrumbCurrent: "Films",
        title: "FILMS",
        description: "Cinematic wedding films crafted with emotional storytelling and unforgettable memories."
    },


    /* ==================================================
       PORTFOLIO JUST US PAGE
       ================================================== */
    portfolioJustUs: {
        breadcrumbParent: "Portfolio",
        breadcrumbCurrent: "Just Us",
        title: "JUST US",
        description: "Romantic and intimate moments beautifully captured to preserve your unique love story forever."
    },


    /* ==================================================
       CAPTURED STORIES PAGE
       ================================================== */
    capturedStories: {
        eyebrow: "A Collection of Love",
        introTitle: "Stories that live forever.",
        introText: '"Every couple has a unique rhythm, a distinct language of love. These are the stories of the souls we\'ve had the honor to document."'
    },


    /* ==================================================
       INDIVIDUAL STORY PAGES
       ================================================== */
    storyPages: {
        "alex-emma": { title: "ALEX & EMMA", meta: "Tuscany, Italy — September 2025" },
        "noah-olivia": { title: "NOAH & OLIVIA", meta: "Malibu, California — August 2025" },
        "liam-ava": { title: "LIAM & AVA", meta: "Paris, France — July 2025" },
        "william-sophia": { title: "WILLIAM & SOPHIA", meta: "London, UK — June 2025" },
        "james-isabella": { title: "JAMES & ISABELLA", meta: "New York, USA — May 2025" },
        "benjamin-mia": { title: "BENJAMIN & MIA", meta: "Santorini, Greece — April 2025" },
        "lucas-charlotte": { title: "LUCAS & CHARLOTTE", meta: "Cotswolds, UK — March 2025" },
        "henry-amelia": { title: "HENRY & AMELIA", meta: "Swiss Alps, Switzerland — February 2025" },
        "alexander-harper": { title: "ALEXANDER & HARPER", meta: "Bali, Indonesia — January 2025" },
        "sebastian-evelyn": { title: "SEBASTIAN & EVELYN", meta: "Kyoto, Japan — December 2024" }
    },


    /* ==================================================
       PLANS & PRICING PAGE
       ================================================== */
    plans: {
        eyebrow: "COLLECTIONS",
        heroTitle: "Plans & Pricing",
        quoteText: '"We are a collective of visual storytellers dedicated to preserving the raw, unscripted emotion of your most cherished days. We don\'t just take photographs, we craft legacies."',
        headerNotice: "2 days wedding photography Packages , Payment Terms : 50% Advance & 50% Wedding Day",

        sections: {
            preWedding: "Pre-Wedding Packages",
            engagement: "Engagement Ceremony Packages",
            wedding: "Wedding Packages",
            maternity: "Maternity Shoot"
        },

        deliverablesLabel: ": Deliverables :"
    },


    /* ==================================================
       CONTACT PAGE
       ================================================== */
    contact: {
        heroTitle: "Contact",
        introTitle: "Let’s Create Something Beautiful Together",
        introText: "Whether you’re planning an intimate ceremony or a grand destination wedding, Studio91 is here to capture every beautiful moment.",
        subText: "Fill out the form below to begin the conversation.",
        
        labels: {
            name: "Your name :",
            email: "Email address :",
            phone: "Phone Number :",
            sessionType: "What type of session are you looking for? :",
            where: "Where? :",
            when: "When? :",
            teamHeading: "Choose required team members below:",
            photographerCount: "Photographer (0-4) :",
            videographerCount: "Videographer (0-4) :",
            droneCount: "Drones (0-1) :",
            message: "Message :",
            story: "Your story! :",
            hearAbout: "How did you hear about us? :"
        },

        placeholders: {
            where: "Venue or Location",
            message: "Tell us what you have in mind...",
            story: "How did you meet? What do you love doing together?",
            selectOption: "Select option"
        },

        hearAboutOptions: [
            { label: "From friend", value: "friend" },
            { label: "Social Media", value: "social_media" },
            { label: "Wedding Planner", value: "wedding_planner" },
            { label: "Google Search", value: "google_search" }
        ],

        submitButtonText: "SEND INQUIRY"
    },


    /* ==================================================
       PLANS & PRICING PACKAGES
       ================================================== */
    plansPage: {
        headerNote: "2 days wedding photography Packages , Payment Terms : 50% Advance & 50% Wedding Day",
        sections: [
            {
                id: "pre-wedding-packages",
                title: "Pre-Wedding Packages",
                packages: [
                    {
                        title: "Essential",
                        price: "₹40,000",
                        sub: "Package 1",
                        inclusions: [
                            "1 Photographer",
                            "1 Videographer"
                        ],
                        deliverables: [
                            "30 Professionally Edited Photos"
                        ],
                        videos: [
                            "1 Cinematic Teaser",
                            "1 Highlight Film"
                        ]
                    },
                    {
                        title: "Premium",
                        price: "₹70,000",
                        sub: "Package 2",
                        inclusions: [
                            "1 Photographer",
                            "1 Videographer",
                            "1 Drone Operator"
                        ],
                        deliverables: [
                            "50 Professionally Edited Photos"
                        ],
                        videos: [
                            "1 Instagram Reel",
                            "1 Cinematic Highlight Film"
                        ]
                    },
                    {
                        title: "Signature",
                        price: "₹1,00,000",
                        sub: "Package 3",
                        inclusions: [
                            "1 Photographer",
                            "2 Videographers",
                            "1 Drone Operator"
                        ],
                        deliverables: [
                            "50 Professionally Edited Photos"
                        ],
                        videos: [
                            "1 Instagram Reel",
                            "1 Cinematic Highlight Film",
                            "1 Cinematic Teaser"
                        ]
                    }
                ]
            },
            {
                id: "engagement-packages",
                title: "Engagement Ceremony Packages",
                packages: [
                    {
                        title: "Essential",
                        price: "₹60,000",
                        sub: "Package 1",
                        inclusions: [
                            "2 Photographers",
                            "1 Videographer"
                        ],
                        deliverables: [
                            "80 Professionally Edited Photos"
                        ],
                        videos: [
                            "1 Cinematic Highlight Film",
                            "1 Cinematic Teaser"
                        ]
                    },
                    {
                        title: "Premium",
                        price: "₹85,000",
                        sub: "Package 2",
                        inclusions: [
                            "2 Photographers",
                            "2 Videographers"
                        ],
                        deliverables: [
                            "100 Professionally Edited Photos"
                        ],
                        videos: [
                            "1 Instagram Reel",
                            "1 Cinematic Highlight Film"
                        ]
                    },
                    {
                        title: "Signature",
                        price: "₹1,20,000",
                        sub: "Package 3",
                        inclusions: [
                            "2 Photographers",
                            "2 Videographers",
                            "1 Drone Operator"
                        ],
                        deliverables: [
                            "100–120 Professionally Edited Photos",
                            "1 Luxury Photo Album"
                        ],
                        videos: [
                            "1 Instagram Reel",
                            "1 Cinematic Highlight Film"
                        ]
                    }
                ]
            },
            {
                id: "wedding-packages",
                title: "Wedding Packages",
                packages: [
                    {
                        title: "Essential",
                        price: "₹90,000",
                        sub: "Package 1",
                        inclusions: [
                            "2 Photographers",
                            "1 Videographer"
                        ],
                        deliverables: [
                            "150 Professionally Edited Photos"
                        ],
                        videos: [
                            "1 Cinematic Highlight Film",
                            "1 Cinematic Teaser"
                        ]
                    },
                    {
                        title: "Premium",
                        price: "₹1,50,000",
                        sub: "Package 2",
                        inclusions: [
                            "2 Photographers",
                            "2 Videographers"
                        ],
                        deliverables: [
                            "200 Professionally Edited Photos",
                            "1 Premium 50-Page Luxury Album"
                        ],
                        videos: [
                            "1 Cinematic Highlight Film",
                            "1 Cinematic Teaser",
                            "1 Full-Length Wedding Film"
                        ]
                    },
                    {
                        title: "Signature",
                        price: "₹2,00,000",
                        sub: "Package 3",
                        inclusions: [
                            "3 Photographers",
                            "2 Videographers",
                            "1 Drone Operator"
                        ],
                        deliverables: [
                            "250 Professionally Edited Photos",
                            "1 Luxury Photo Album"
                        ],
                        videos: [
                            "1 Instagram Reel",
                            "1 Cinematic Highlight Film",
                            "1 Cinematic Teaser",
                            "1 Full-Length Wedding Film"
                        ]
                    }
                ]
            },
            {
                id: "maternity-portraiture",
                title: "Maternity Shoot",
                isMaternity: true,
                packages: [
                    {
                        title: "Essential",
                        price: "₹40,000",
                        sub: "Package 1",
                        inclusions: [
                            "1 Photographer",
                            "1 Videographer"
                        ],
                        deliverables: [
                            "30 Professionally Edited Photos"
                        ],
                        videos: [
                            "1 Cinematic Teaser",
                            "1 Highlight Film"
                        ]
                    },
                    {
                        title: "Premium",
                        price: "₹70,000",
                        sub: "Package 2",
                        inclusions: [
                            "1 Photographer",
                            "1 Videographer",
                            "1 Drone Operator"
                        ],
                        deliverables: [
                            "50 Professionally Edited Photos"
                        ],
                        videos: [
                            "1 Instagram Reel",
                            "1 Cinematic Highlight Film"
                        ]
                    }
                ]
            }
        ]
    },


    /* ==================================================
       FOOTER
       ================================================== */
    footer: {
        brandName: "STUDIO91",
        description: "Studio91 is a premium wedding photography and cinematic filmmaking brand dedicated to capturing timeless love stories with elegance, emotion, and creativity. From intimate ceremonies to grand destination weddings, we transform beautiful moments into unforgettable memories that last forever.",
        copyright: "© 2026 Studio91. All Rights Reserved."
    },


    /* ==================================================
       SEO & META DATA
       ================================================== */
    seo: {
        home: {
            title: "Studio91 | Luxury Wedding Photography",
            description: "Luxurious, authentic, and cinematic wedding photography by Studio91."
        },
        about: {
            title: "About Us | Studio91",
            description: "Learn about Studio91, founded by Dhruv Joshi. Over 10 years of luxury wedding photography and cinematic filmmaking."
        },
        portfolio: {
            title: "Portfolio | Studio91",
            description: "A collection of beautiful love stories captured through wedding photography, cinematic films, and portraiture."
        },
        portfolioPhotography: {
            title: "Photography Portfolio | Studio91",
            description: "Capturing timeless wedding moments filled with emotions, elegance, and beautiful celebrations."
        },
        portfolioFilms: {
            title: "Films Portfolio | Studio91",
            description: "Cinematic wedding films crafted with emotional storytelling and unforgettable memories."
        },
        portfolioJustUs: {
            title: "Just Us Portfolio | Studio91",
            description: "Romantic and intimate pre-wedding and couple portraiture beautifully captured by Studio91."
        },
        capturedStories: {
            title: "Captured Stories | Studio91",
            description: "Explore intimate destination wedding stories and celebrations documented around the globe."
        },
        plans: {
            title: "Plans & Pricing | Studio91",
            description: "Luxury wedding photography, pre-wedding, engagement, and maternity packages by Studio91."
        },
        contact: {
            title: "Contact | Studio91",
            description: "Get in touch with Studio91 to discuss your wedding photography, films, or destination celebration."
        }
    }
};
