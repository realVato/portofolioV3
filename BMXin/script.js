// Side Navbar
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// AutoComplete
const autoComplete = document.querySelector('.autocomplete');
M.Autocomplete.init(autoComplete, {
    data: {
        // Brands list
        'Adidas': null,
        'Animal': null,
        'Arcade': null,
        'Alienation': null,
        'AntiHero': null,
        'Altamont': null,
        'Antidote': null,
        'Banned': null,
        'BicycleUnion': null,
        'BSD': null,
        'Beto': null,
        'Box': null,
        'Bullet': null,
        'CambianActionSports': null,
        'Cinema': null,
        'CHPO': null,
        'Cuda': null,
        'Cult': null,
        'Dailygrind': null,
        'Demolition': null,
        'Doomed': null,
        'Ethik': null,
        'Etnies': null,
        'Fairdale': null,
        'Fly': null,
        'Fuse': null,
        'GT': null,
        'Halo': null,
        'Haro': null,
        'Identiti': null,
        'innova': null,
        'JetBMX': null,
        'JumpClub': null,
        'Kenda': null,
        'KMC': null,
        'Mongoose': null,
        'Mutiny': null,
        'Nutrak': null,
        'Odyssey': null,
        'Premium': null,
        'Profile': null,
        'Relic': null,
        'Revenge': null,
        'Salt': null,
        'Saltplus': null,
        'Shadow': null,
        'Sunday': null,
        'Thrasher': null,
        'Tubolito': null,
        'United': null,
        'Vans': null,
        'Volume': null,
        'Wethepeople': null,
    }
});

// Material boxed (img responsive)
const materialBoxed = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBoxed, {});

// Scroll Spy
const scrollSpy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollSpy, {});