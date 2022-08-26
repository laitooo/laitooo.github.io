import { Project, ProjectCategory, UrlType } from '../models/project'

export const projectsList: Project[] = [
  {
    id: 1,
    name: "Manga Online",
    description: "It's a free application for reading Asian manga of all kinds on the mobile phone. A simple yet effective Arabic manga app that provides a great reading experience Simplicity and speed in downloading chapters. 10k+ downloads on Google play.",
    imagePath: "/screenshots/covers/manga.jpg",
    category: ProjectCategory.flutter,
    url: "https://play.google.com/store/apps/details?id=zxc.laitooo.manga.online",
    urlType: UrlType.googlePlay,
    screenshots: ["/screenshots/manga/1.jpg", "/screenshots/manga/2.jpg", "/screenshots/manga/3.jpg", "/screenshots/manga/4.png",
      "/screenshots/manga/5.jpg",]
  },
  {
    id: 2,
    name: "Werewolf Online",
    description: "A multiplayer android mobile game that has two teams (werewolfs and villagers) competing to kill each other , the team that all his members dies first lose the game . It contains a lot of feature like firends chats, groups and voice chat for group games.",
    imagePath: "/screenshots/covers/werewolf.jpg",
    category: ProjectCategory.android,
    url: "https://github.com/laitooo/Werewolf-Online",
    urlType: UrlType.github,
    screenshots: ["/screenshots/werewolf/1.jpg", "/screenshots/werewolf/2.jpg", "/screenshots/werewolf/3.jpg", "/screenshots/werewolf/4.jpg",
    "/screenshots/werewolf/5.jpg",],
  },
  {
    id: 3,
    name: "Plants vs zombies clone",
    description: "A simple Plants vs zombies game clone made in unity with C#.",
    imagePath: "/screenshots/covers/pvz.jpg",
    category: ProjectCategory.unity,
    url: "https://www.youtube.com/watch?v=vn2zIqOBnsc",
    urlType: UrlType.youtube,
    screenshots: ["/screenshots/pvz/1.JPG", "/screenshots/pvz/2.JPG", "/screenshots/pvz/3.JPG", "/screenshots/pvz/4.JPG",],
  },
  {
    id: 6,
    name: "Riwayat space",
    description: "The space of novels is a mobile application that offers you novels of backward classifications to read and with a professional Arabic translation. It has several features like Ease and simplicity of use, a fast and easy application to navigate between novels and chapters",
    imagePath: "/screenshots/covers/novels.jpg",
    category: ProjectCategory.flutter,
    url: "https://play.google.com/store/apps/details?id=zxc.laitooo.flutter.riwayat_space",
    urlType: UrlType.googlePlay,
    screenshots: ["/screenshots/novels/1.png", "/screenshots/novels/2.png", "/screenshots/novels/3.png", "/screenshots/novels/4.png",
    "/screenshots/novels/5.png",],
  },
  {
    id: 7,
    name: "Flutter manga scrapper",
    description: "A flutter mobile application for scraping and downloading manga from Manga town.",
    imagePath: "/screenshots/covers/scrapper.jpg",
    category: ProjectCategory.flutter,
    url: "https://github.com/laitooo/flutter_manga_scraper",
    urlType: UrlType.github,
    screenshots: ["/screenshots/scrapper/1.png", "/screenshots/scrapper/2.png", "/screenshots/scrapper/3.png", "/screenshots/scrapper/4.png",],
  },
  {
    id: 10,
    name: "Sudoku",
    description: "The famous sudoku game developed into mobile app using flutter (dart).",
    imagePath: "/screenshots/covers/sudoku.jpg",
    category: ProjectCategory.flutter,
    url: "https://github.com/laitooo/Sudoku",
    urlType: UrlType.github,
    screenshots: ["/screenshots/sudoku/1.png", "/screenshots/sudoku/2.png",],
  },
  {
    id: 11,
    name: "Space shooter",
    description: "Simple Space Shooter game using C# with Unity. The game theme is 'The game is a liar'",
    imagePath: "/screenshots/cover/space_shooter.jpg",
    category: ProjectCategory.unity,
    url: "https://laitooo.github.io/Space-Shooter/",
    urlType: UrlType.demo,
    screenshots: ["/screenshots/simsimy/1.JPG", "/screenshots/simsimy/2.JPG", "/screenshots/simsimy/3.JPG", "/screenshots/simsimy/4.JPG",],
  },
  {
    id: 8,
    name: "Simsimy Launcher",
    description: "An Android home launcher for kids tablets used to set limits and control the child's action. developed using Java",
    imagePath: "/screenshots/covers/simsimy.jpg",
    category: ProjectCategory.android,
    url: "",
    urlType: UrlType.none,
    screenshots: ["/screenshots/simsimy/1.JPG", "/screenshots/simsimy/2.JPG", "/screenshots/simsimy/3.JPG", "/screenshots/simsimy/4.JPG",],
  },
  {
    id: 9,
    name: "Simsimy Parent control",
    description: "An android app for parents to control the child phone home launcher settings",
    imagePath: "/screenshots/covers/parent.jpg",
    category: ProjectCategory.android,
    url: "",
    urlType: UrlType.none,
    screenshots: ["/screenshots/parent/1.JPG", "/screenshots/parent/2.JPG", "/screenshots/parent/3.JPG", "/screenshots/parent/4.JPG",],
  },
  {
    id: 4,
    name: "Endless runner",
    description: "Endless running game sample made using Unity with C#.",
    imagePath: "/screenshots/covers/runner.jpg",
    category: ProjectCategory.unity,
    url: "https://www.youtube.com/watch?v=vn2zIqOBnsc",
    urlType: UrlType.youtube,
    screenshots: ["/screenshots/runner/1.png", "/screenshots/runner/2.png", "/screenshots/runner/3.png", "/screenshots/runner/4.png",],
  },  
  {
    id: 5,
    name: "Forward",
    description: "Forward is a website to a productivity juggernaut, tasks and weekly planner in one place.",
    imagePath: "/screenshots/covers/forward.jpg",
    category: ProjectCategory.flutter,
    url: "https://todo-app-b95a0.web.app/#/",
    urlType: UrlType.demo,
    screenshots: ["/screenshots/forward/1.JPG", "/screenshots/forward/2.JPG", "/screenshots/forward/3.JPG", "/screenshots/forward/4.JPG",],
  },
]