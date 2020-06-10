const BOOKS = [
    {
        "title": "Emergent Strategy: Shaping Change, Changing Worlds",
        "genre": "Nonfiction, Social Movements, Social Justice, Politics, Activism, Self Help, Feminism",
        "author": "adrienne maree brown",
        "pages": 274,
    },
    {
        "title": "Sister Outsider",
        "genre": "Nonfiction, Social Justice, Feminism, Race, Essays, Gender, Anti Racist",
        "author": "Audre Lorde",
        "pages": 190,
    },
    {
        "title": "White Teeth",
        "genre": "Fiction, Contemporary, Novels",
        "author": "Zadie Smith",
        "pages": 448,
    },
    {
        "title": "Beloved",
        "genre": "Fiction, Classics, Historical Fiction, Magical Realism",
        "author": "Toni Morrison",
        "pages": 324,
    },
    {
        "title": "Feminism is for Everybody: Passion Politics",
        "genre": "Nonfiction, Feminism, Gender, Politics",
        "author": "bell hooks",
        "pages": 123,
    },
    {
        "title": "Just Mercy",
        "genre": "Nonfiction, Politics, Social Movements, Law, Race",
        "author": "Bryan Stevenson",
        "pages": 336,
    },
    {
        "title": "Between The World And Me",
        "genre": "Nonfiction, Race, History, Memoir",
        "author": "Ta-Nehisi Coates",
        "pages": 152,
    },
    {
        "title": "The New Jim Crow: Mass Incarceration in the Age of Colorblindness",
        "genre": "Nonfiction, Race, History",
        "author": "Michelle Alexander",
        "pages": 290,
    },
    {
        "title": "White Fragility",
        "genre": "Nonfiction, Social Justice, Politics, Activism",
        "author": "Robin DiAngelo",
        "pages": 7,
    },
    {
        "title": "How to Be an Antiracist",
        "genre": "Nonfiction, Social Movements, Race, Politics",
        "author": "Ibram X. Kendi",
        "pages": 305,
    },
    {
        "title": "My Grandmother's Hands: Racialized Trauma and the Pathway to Mending Our Hearts and Bodies",
        "genre": "Social Psychology, Discrimination, Psychopathology",
        "author": "Resmaa Menakem",
        "pages": 300,
    },
    {
        "title": "Women, Race, & Class",
        "genre": "Social Science, Women's Studies, Ethnic Studies, Feminism",
        "author": "Angela Y. Davis",
        "pages": 288,
    },
    {
        "title": "The Condemnation of Blackness: Race, Crime, and the Making of Modern Urban America",
        "genre": "Ethnic Studies, Criminology, Sociology",
        "author": "Khalil Gibran Muhammad",
        "pages": 416,
    },
    {
        "title": "Me and White Supremacy: Combat Racism, Change the World, and Become a Good Ancestor",
        "genre": "Discrimination, Minority Studies, Prejudice",
        "author": "Layla Saad",
        "pages": 256,
    },
    {
        "title": "The Fire Next Time",
        "genre": "Nonfiction, Race, History",
        "author": "James Baldwin",
        "pages": 106,
    },
    {
        "title": "Dying of Whiteness: How the Politics of Racial Resentment Is Killing America's Heartland",
        "genre": "Nonfiction, Politics, Race, Anti Racist",
        "author": "Jonathan M. Metzl",
        "pages": 314,
    },
    {
        "title": "Stamped from the Beginning: The Definitive History of Racist Ideas in America",
        "genre": "Nonfiction, History, Race, Politics, Anti Racist",
        "author": "Ibram X. Kendi",
        "pages": 592,
    },
    {
        "title": "The Autobiography of Malcolm X",
        "genre": "Nonfiction, Biography, History",
        "author": "Malcolm X, Alex Haley",
        "pages": 466,
    },
    {
        "title": "So You Want to Talk About Race",
        "genre": "Nonfiction, Race, Politics, Anti Racist",
        "author": "Ijeoma Oluo",
        "pages": 248,
    },
    {
        "title": "Becoming",
        "genre": "Nonfiction, Biography, Politics, Feminism",
        "author": "Michelle Obama",
        "pages": 426,
    },
    {
        "title": "Heavy: An American Memoir",
        "genre": "Nonfiction, Race, Memoir",
        "author": "Kiese Laymon",
        "pages": 256,
    },
    {
        "title": "I'm Still Here: Black Dignity in a World Made For Whiteness",
        "genre": "Nonfiction, Race, Anti Racist, Social Justice",
        "author": "Austin Channing Brown",
        "pages": 185,
    },
    {
        "title": "How We Fight For Our Lives",
        "genre": "Nonfiction, Race, LGBT",
        "author": "Saeed Jones",
        "pages": 192,
    },
    {
        "title": "Thick: And Other Essays",
        "genre": "Nonfiction, Feminism, Race",
        "author": "Tressie McMillan Cottom",
        "pages": 248,
    },
    {
        "title": "This Will Be My Undoing: Living at the Intersection of Black, Female, and Feminist in (White) America",
        "genre": "Nonfiction, Feminism, Race",
        "author": "Morgan Jerkins",
        "pages": 258,
    },
    {
        "title": "Barracoon: The Story of the Last “Black Cargo”",
        "genre": "Nonfiction, History, Race",
        "author": "Zora Neale Hurston",
        "pages": 171,
    },
    {
        "title": "The Nickel Boys",
        "genre": "Fiction, Literary Fiction, Race, Historical Fiction",
        "author": "Colson Whitehead",
        "pages": 213,
    },
    {
        "title": "When They Call You a Terrorist: A Black Lives Matter Memoir",
        "genre": "Nonfiction, Race, Politics, Anti Racist",
        "author": "Patrisse Khan-Cullors, Asha Bandele, Angela Y. Davis (Foreword)",
        "pages": 257,
    },
    {
        "title": "Eloquent Rage: A Black Feminist Discovers Her Superpower",
        "genre": "Nonfiction, Feminism, Race, Anti Racist",
        "author": "Brittney Cooper",
        "pages": 288,
    },
    {
        "title": "Hood Feminism: Notes from the Women That a Movement Forgot",
        "genre": "Nonfiction, Feminism, Race, Essays, Anti Racist",
        "author": "Mikki Kendall",
        "pages": 288,
    },
    {
        "title": "Black Marxism: The Making of the Black Radical Tradition",
        "genre": "Race, History, Politics, Nonfiction",
        "author": "Cedric J. Robinson",
        "pages": 480,
    },
    {
        "title": "How We Get Free: Black Feminism and the Combahee River Collective",
        "genre": "Feminism, Nonfiction, Race, History, Anti Racist",
        "author": "Keeanga-Yamahtta Taylor",
        "pages": 191,
    },
    {
        "title": "Well-Read Black Girl: Finding Our Stories, Discovering Ourselves",
        "genre": "Nonfiction, Essays, Feminism, Race",
        "author": "Glory Edim (Editor, Introduction), Jesmyn Ward (Contributor), Lynn Nottage (Contributor), Jacqueline Woodson (Contributor), Gabourey Sidibe (Contributor), Morgan Jerkins (Contributor), Tayari Jones (Contributor), Rebecca Walker (Contributor) , Barbara Smith (Contributor), Zinzi Clemmons (Contributor), N.K. Jemisin (Contributor), Nicole Y. Dennis-Benn (Contributor), Jamia Wilson (Contributor)",
        "pages": 272,
    },
    {
        "title": "Fatal Invention: How Science, Politics, and Big Business Re-create Race in the Twenty-First Century",
        "genre": "Race, Nonfiction, Science, Anti Racist",
        "author": "Dorthy Roberts",
        "pages": 400,
    },
    {
        "title": "The Negro Artist and the Racial Mountain",
        "genre": "Race, Nonfiction, Essays",
        "author": "Langston Hughes",
    },
];