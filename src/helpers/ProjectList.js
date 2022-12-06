import sportSpot from '../assets/sportSpot.png';
import dailyPlanner from '../assets/dailyPlanner.png';
import marvel from '../assets/marvel.png';
import password from '../assets/password.png';
import textEditor from '../assets/textEditor.png';
import noteTaker from '../assets/noteTaker.png'

export const projectList = [
    {
        id: 0,
        name: 'Text Editor',
        technologies: 'Webpack, IndexedDB, PWA',
        github: 'https://github.com/lcfhines/text-editor',
        deployed: 'https://pwa-text-editor1123.herokuapp.com/',
        image: textEditor
    },
    {
        id: 1,
        name: 'Tech Blog',
        technologies: 'Node.js, Express.js, Handlebars.js, MySQL, Sequelize',
        github: 'https://github.com/lcfhines/tech-blog',
        deployed: 'https://sheltered-woodland-17791.herokuapp.com/',
        image: ''
    },
    {
        id: 2,
        name: 'SportSpot',
        technologies: 'Node.js, Express.js, Handlebars.js, MySQL, Sequelize',
        github: 'https://github.com/ereneedolan/Sport-spot',
        deployed: 'https://the-sport-spot-team-1.herokuapp.com/',
        image: sportSpot
    },
    {
        id: 3,
        name: 'Marvel for Dummies',
        technologies: 'HTML, CSS, JavaScript, Client & Server Side APIs',
        github: 'https://github.com/malvinaH/marvel-for-dummies',
        deployed: 'https://malvinah.github.io/marvel-for-dummies/',
        image: marvel
    },
    {
        id: 4,
        name: 'Note Taker',
        technologies: 'Node.js, Express.js',
        github: 'https://github.com/lcfhines/note-taker',
        deployed: 'https://lit-sierra-41553.herokuapp.com/',
        image: noteTaker
    },
    {
        id: 5,
        name: 'Daily Planner',
        technologies: 'JavaScript',
        github: 'https://github.com/lcfhines/daily-planner',
        deployed: 'https://lcfhines.github.io/daily-planner/',
        image: dailyPlanner
    },
]