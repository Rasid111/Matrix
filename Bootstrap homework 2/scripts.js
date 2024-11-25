let language = "EN";
let theme = "Light";

let languages = {
    EN: {
        nav: ["Demos", "Pages", "Projects", "Theme", "Account", "Language"],
        theme: ["Light", "Dark"],
        titles:[
            {
                header: "We bring solutions to make life easier",
                span: "We are a creative company that focuses on long term relationships with customers.",
                button: "Read More",
            },
            {
                header: "Here are a few reasons why our customers choose Sandbox.",
                span: "Why Choose Sandbox?",
            },
            {
                header: "Check out some of our awesome projects with creative ideas and great design.",
                span: "Latest Projects",
            }
        ],
        cards: ["Content Marketing", "Social Engagement", "Identity & Branding", "Product Design"],
        reasons: ["Collect Ideas", "Data Analysis", "Finalize Product"],
        stats: {
            h1: "Save your time and money by choosing our professional team.",
            h4: "Save Time and Money",
            h5: ["Customer Satisfaction", "Increased Revenue"],
        },
        reviews: ["Financial Analyst", "Marketing Specialist", "Sales Manager"],
        latestProjects: ["MAGAZINE, BOOK", "PACKAGING", "STATIONARY, BRANDING"],
        difference: {
            h1: "We bring solutions to make life easier for our customers.",
            span: "WHAT MAKES US DIFFERENET?",
            h4: ["Creativity", "Innovative Thinking", "Rapid Solutions", "Top-Notch Support"],
        },
        community: {
            h1: "We are trusted by over 5000+ clients. Join them now and grow your business.",
            h5: "JOIN OUR COMMUNITY",
            button: "Get Started",
        },
        footer: [
            {rights: "All rights reserved."},
            {
                h4: "Get in Touch",

            },
            {
                h4: "Learn More", 
                links: ["Our Story", "Projects", "About us", "Terms of Use", "Privacy Policy"],

            },
            {
                h4: "Our Newsletter",
                h6: "Subscribe to our newsletter to get our news & deals delivered to you.", 
                button: "Join",
            }
        ]
    },
    AZ:{
        nav: ["Demolar", "Səhifələr", "Projectler", "Tema", "Akaunt", "Dil"],
        theme: ["Açıq", "Tünd"],
        titles:[
            {
                header:"Biz həyatı asanlaşdırmaq üçün həllər təqdim edirik",
                span: "Biz müştərilərlə uzunmüddətli əlaqələrə diqqət yetirən yaradıcı bir şirkətik.",
                button: "Ətraflı Oxu",
            },
            {
                header: "Müştərilərimizin Sandbox-u seçməsinin bir neçə səbəbi bunlardır.",
                span: "Niyə Sandbox seçməlisiniz?",
            },
            {
                header: "Yaradıcı ideyaları və gözəl dizaynı olan bəzi zəhmli layihələrimizə baxın.",
                span: "Ən Son Layihələr",
            }
        ],
        cards: ["Məzmun marketinqi", "Sosial İştirak", "Kimlik və Brendləşmə", "Məhsul Dizaynı"],
        reasons: ["İdeyaları toplayın", "Məlumatların təhlili", "Məhsulu yekunlaşdırın"],
        stats: {
            h1: "Peşəkar komandamızı seçərək vaxtınıza və pulunuza qənaət edin.",
            h4: "Vaxta və pula qənaət edin",
            h5: ["Müştəri Məmnuniyyəti", "Artan Gəlir"],
        },
        reviews: ["Maliyyə Analitiki", "Marketinq Mütəxəssisi", "Satış meneceri"],
        latestProjects: ["JURNALI, KİTAB", "QABLAMA", "STATIONAR, BRENDING"],
        difference: {
            h1: "Müştərilərimizin həyatını asanlaşdırmaq üçün həllər təqdim edirik.",
            span: "BİZİ FƏRQLİ EDƏN NƏDİR?",
            h4: ["Yaradıcılıq", "Yenilikçi Düşüncə", "Sürətli həllər", "Ən yüksək səviyyəli dəstək"],
        },
        community: {
            h1: "Bizə 5000-dən çox müştəri etibar edir. İndi onlara qoşulun və biznesinizi inkişaf etdirin.",
            h5: "İCTİMAİYİMİZƏ QOŞULUN",
            button: "Başlayın",
        },
        footer: [
            {rights: "Bütün hüquqlar qorunur."},
            {
                h4: "Əlaqə saxlayın",

            },
            {
                h4: "Ətraflı məlumat əldə edin", 
                links: ["Bizim Hekayəmiz", "Layihələr", "Haqqımızda", "İstifadə şərtləri", "Məxfilik Siyasəti"],

            },
            {
                h4: "Bülletenimiz",
                h6: "Xəbərlərimizi və təkliflərimizi sizə çatdırmaq üçün bülletenimizə abunə olun.", 
                button: "Qoşulun",
            }
        ]
    }
}

function translate(lang){
    document.querySelectorAll("header>.container")[0].querySelectorAll(".dropdown-toggle").forEach((item, index) => {
        item.innerText = lang.nav[index];
    });
    document.querySelectorAll("#Theme>li>.dropdown-item").forEach((item, index) => {
        item.innerText = lang.theme[index];
    });
    
    document.querySelectorAll("#Theme>li>dropdown-item").forEach((item, index) => {
        item.innerText = lang.theme[index];
    })
    document.querySelectorAll("header>.container")[1].querySelector("h1").innerText = lang.titles[0].header;
    document.querySelectorAll("header>.container")[1].querySelector("span").innerText = lang.titles[0].span;
    document.querySelectorAll("header>.container")[1].querySelector("button").innerText = lang.titles[0].button;
    document.querySelectorAll("body>.container")[0].querySelectorAll(".card").forEach((item, index) => {
        item.querySelector("h5").innerText = lang.cards[index];
    });
    document.querySelectorAll("body>.container")[1].querySelector("span").innerText = lang.titles[1].span;
    document.querySelectorAll("body>.container")[1].querySelector("h1").innerText = lang.titles[1].header;
    document.querySelectorAll("#reasons>.container>.row>div").forEach((item, index) => {
        item.querySelector("h5").innerText = lang.reasons[index];
    });
    document.querySelectorAll("#reasons .carousel-item").forEach((item, index) => {
        item.querySelector("h4").innerText = lang.reasons[index];
    });
    document.querySelector("body>.container-fluid h1").innerText = lang.stats.h1;
    document.querySelector("body>.container-fluid h4").innerText = lang.stats.h4;
    document.querySelectorAll("body>.container-fluid h5").forEach((item, index) => {
        item.innerText = lang.stats.h5[index];
    });
    document.querySelectorAll(".reviews .carousel-item").forEach((item, index) => {
        item.querySelector("h5").innerText = lang.reviews[index];
    })
    document.querySelectorAll(".title")[2].querySelector("h1").innerText = lang.titles[2].header;
    document.querySelectorAll(".title")[2].querySelector("span").innerText = lang.titles[2].span;

    document.querySelectorAll("body>.container")[4].querySelectorAll("p").forEach((item, index) => {
        item.innerText = lang.latestProjects[index];
    });
    document.querySelector(".difference h1").innerText = lang.difference.h1;
    document.querySelector(".difference span").innerText = lang.difference.span;
    document.querySelectorAll(".difference h4").forEach((item, index) => {
        item.innerText = lang.difference.h4[index];
    });
    document.querySelector(".community h5").innerText = lang.community.h5;
    document.querySelector(".community h1").innerText = lang.community.h1;
    document.querySelector(".community button").innerText = lang.community.button;
    document.querySelectorAll(".footer>.row>div")[0].querySelectorAll("h6")[1].innerText = lang.footer[0].rights;
    document.querySelectorAll(".footer>.row>div")[1].querySelector("h4").innerText = lang.footer[1].h4;
    document.querySelectorAll(".footer>.row>div")[2].querySelector("h4").innerText = lang.footer[2].h4;
    document.querySelectorAll(".footer>.row>div")[2].querySelectorAll("a").forEach((item, index) => {
        item.innerText = lang.footer[2].links[index];
    });
    document.querySelectorAll(".footer>.row>div")[3].querySelector("h4").innerText = lang.footer[3].h4;
    document.querySelectorAll(".footer>.row>div")[3].querySelector("h6").innerText = lang.footer[3].h6;
    document.querySelectorAll(".footer>.row>div")[3].querySelector("button").innerText = lang.footer[3].button;
}

document.querySelectorAll("#language>li>.dropdown-item").forEach((item) => {
    item.addEventListener("click", (ev) => {
        if (language === ev.target.innerText)
            return;
        else{
            language = ev.target.innerText;
            switch (language) {
                case "EN":
                    language = "EN";
                    translate(languages.EN)
                    break;
                case "AZ":
                    language = "AZ";
                    translate(languages.AZ)
                    break;
                default:
                    break;
            }
        }
    });
});

document.querySelectorAll("#Theme>li>.dropdown-item").forEach((item) => {
    item.addEventListener("click", (ev) => {
        if (theme === ev.target.innerText)
            return;
        else{
            theme = ev.target.innerText;
            if (theme === "Light" || theme == "Açıq") {
                html = document.querySelector("html");
                html.dataset.bsTheme = "light";
                html.className = "";
                html.classList.add("light")
                html.querySelector("div:has(.save-time)").classList.replace("bg-dark-subtle", "bg-light")
                html.querySelector(".reviews").classList.replace("bg-dark", "bg-white");
                return;
            }
            if (theme === "Dark" || theme === "Tünd") {
                html = document.querySelector("html");
                html.dataset.bsTheme = "dark";
                html.className = "";
                html.classList.add("dark")
                html.querySelector("div:has(.save-time)").classList.replace("bg-light", "bg-dark-subtle")
                html.querySelector(".reviews").classList.replace("bg-white", "bg-dark");
                return;
            }
        }
    });
});

document.querySelector("#loginModal .modal-body .input-group button").addEventListener("click", (ev) => {
    input = document.querySelector("#loginModal .modal-body .input-group input");
    if (input.type === "password") {
        ev.target.innerText = "👁️"
        input.type = "text";
    }
    else {
        ev.target.innerText = "➖"
        input.type = "password";
    }
});

document.querySelectorAll("#signupModal .modal-body .input-group button").forEach((item, index) => {
    console.log(item);
    item.addEventListener("click", (ev) => {
        input = document.querySelectorAll("#signupModal .modal-body .input-group input")[index];
        if (input.type === "password") {
            ev.target.innerText = "👁️"
            input.type = "text";
        }
        else {
            ev.target.innerText = "➖"
            input.type = "password";
        }
    });
});