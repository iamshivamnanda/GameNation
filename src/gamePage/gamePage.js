import React from 'react';
import { useParams } from 'react-router-dom';
import './gamePage.scss';

export const GamePage = () => {
    let parm = useParams();


    const gameslist = [
        {
            title:'GTA5',
            description:`GTA 5 or Grand Theft Auto 5 was developed by Rockstar North and published by Rockstar Games. GTA 5 is an incredible open world action adventure game taking place in the city known as 'Los Santos'. Its release took place in September 2013 for Playstation 3 and Xbox 360 consoles, and November 2014 for Playstation 4 and Xbox One. On April 14, 2004 the game was available for purchase and download on Windows PC. In GTA 5 you will play with three main characters: Franklin Clinton, Michael De Santa and Trevor Philips. Grand Theft Auto 5 for PC also brings the debut of the Rockstar Editor, a powerful suite of creative tools to quickly and easily capture, edit and share game footage from within Grand Theft Auto 5. The Rockstar Editor’s Director Mode allows players the ability to stage their own scenes using prominent story characters, pedestrians, and even animals to bring their vision to life. So don't wait any longer and join the action right now in Grand Theft Auto 5.`,
            image:'https://static.wixstatic.com/media/d477fc_975b12c31abc4de5bffe5ceb854dc682~mv2.jpg/v1/fill/w_672,h_378,al_c,lg_1,q_90/d477fc_975b12c31abc4de5bffe5ceb854dc682~mv2.webp',
            download:'magnet:?xt=urn:btih:6AF27C5A03509C4170833D9AC3985D1C9399D59C'
        },
        {
            title:'GTA San Andreas',
            description:`GTA San Andreas or also called Grand Theft Auto San Andreas is an amazing open world action game taking you into an insane adventure. Five years ago it all started, when Carl Johnson escaped from the pressures of life in Los Santos, San Andreas… a city tearing itself apart with gang trouble, drugs and corruption. Where filmstars and millionaires do their best to avoid the dealers and gangbangers. Now, it’s the early 90s. Carl’s got to go home. His mother has been murdered, his family has fallen apart and his childhood friends are all heading towards disaster. On his return to the neighborhood, a couple of corrupt cops frame him for homicide. CJ is forced on a journey that takes him across the entire state of San Andreas, to save his family and to take control of the streets. GTA San Andreas is still played by thousands of people every day.`,
            image:'https://nox.uno/wp-content/uploads/2020/05/GTA-San-Andreas.jpg',
            download:'magnet:?xt=urn:btih:1b74eacc73b1e294eaaf43d7ceedb89ddde2d843&dn=Grand+Theft+Auto+GTA+San+Andreas+version+1.1+repack+Mr+DJ&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fzer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce'
        },
        {
            title:'Cyberpunk 2077',
            description:`You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you. Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City. Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth. Take the riskiest job of your life and go after a prototype implant that is the key to immortality!`,
            image:'https://static.wixstatic.com/media/d477fc_8986a13e0679452780787e77885b234d~mv2.jpg',
            download:'https://send.cm/oed8c02zvjjp'
        },
        {
            title:'RedDead',
            description:`Red Dead Redemption 2 is an action-adventure game developed and published by Rockstar Games. It was released for the PlayStation 4 and Xbox One in October 2018, and for Microsoft Windows in November 2019. The game is the third entry in the Red Dead series and is a prequel to the 2010 game Red Dead Redemption. The story is set in 1899 in a fictionalized representation of the Western, Midwestern and Southern United States and follows outlaw Arthur Morgan, a member of the Van der Linde gang. Arthur must deal with the decline of the Wild West whilst attempting to survive against government forces, rival gangs, and other adversaries. The story also follows fellow gang member John Marston, the protagonist of Red Dead Redemption. The game is presented through both first and third-person perspectives, and the player may freely roam in its interactive open world. Gameplay elements include shootouts, heists, hunting, horseback riding, interacting with non-player characters (NPCs), and maintaining the character’s honor rating through moral choices and deeds. A bounty system similar to the “wanted” system from the Grand Theft Auto franchise governs the response of law enforcement and bounty hunters to crimes committed by the player. Red Dead Online, the online multiplayer mode of the game, was released as a beta version in November 2018 before a full release in May 2019.`,
            image:'https://static.wixstatic.com/media/d477fc_2bbf1886c6a542958ed0fa0fdf5437d7~mv2.jpg/v1/fill/w_672,h_374,al_c,lg_1,q_90/d477fc_2bbf1886c6a542958ed0fa0fdf5437d7~mv2.webp',
            download:'https://1fichier.com/?cqbry73j47dmabvgoveo'
        },
        {
            title:'NBA 2K21',
            description:`NBA 2K21 is the latest title in the world-renowned, best-selling NBA 2K series, delivering an industry-leading sports video game experience. With extensive improvements upon its best-in-class graphics and gameplay, competitive and community online features, and deep, varied game modes, NBA 2K21 offers one-of-a-kind immersion into all facets of NBA basketball and culture – where Everything is Game.`,
            image:'https://static.wixstatic.com/media/d477fc_7295a4be61834c8f959445e0d2371815~mv2.jpg/v1/fill/w_672,h_374,al_c,lg_1,q_90/d477fc_7295a4be61834c8f959445e0d2371815~mv2.webp',
            download:'https://web-ext-two.com/in/?page=io8273dksksldue8923&utm_source=2&utm_campaign=wpjotda0sl6vfc1cimq8g3d6&subid=master&customer=78245'
        },
        {
            title:'Grand Theft Auto: The Trilogy',
            description:`Three iconic cities, three epic stories. Play the genre-defining classics of the original Grand Theft Auto Trilogy: Grand Theft Auto III, Grand Theft Auto: Vice City and Grand Theft Auto: San Andreas updated for a new generation, now with across-the-board enhancements including brilliant new lighting and environmental upgrades, with high-resolution textures, increased draw distances, Grand Theft Auto V-style controls and targeting, and much more, bringing these beloved worlds to life with all new levels of detail.`,
            image:'https://cdn.vox-cdn.com/thumbor/W_OSCFezeogfx7v03gTrMAugWn0=/0x0:1650x928/1200x800/filters:focal(693x332:957x596)/cdn.vox-cdn.com/uploads/chorus_image/image/70145784/unnamed.0.jpg',
            download:'https://send.cm/jq9v9rs1wdk3'
        },
        {
            title:'Rocket League',
            description:`Rocket League is a futuristic Sports-Action game. In Rocket League you have to manage your driving skills and play soccer with booster-rigged vehicles that can be crashed into balls for incredible goals or epic saves across multiple, highly-detailed arenas. You can choose a variety of high-flying vehicles equipped with huge rocket boosters to score amazing aerial goals and pull-off incredible game-changing saves. Rocket League is still one of the most played games on consoles and PC and with the amazing Multiplayer modes the game has, it's really worth trying out!`,
            image:'https://static.wixstatic.com/media/d477fc_68e5ae98336e458794706843563699a6~mv2.jpg/v1/fill/w_672,h_378,al_c,lg_1,q_90/d477fc_68e5ae98336e458794706843563699a6~mv2.webp',
            download:'https://www.betterex.xyz/ilp/cr/Download-Me.html?partid=wpsmodedf&postbackid=8928555238491677625&internalid=905012&fname=Rocket%20League%20Free%20Download%20Torrent&tk=mtyZnZmYmZK0mJq1ma%3D%3D'
        },
        {
            title:'Halo 3',
            description:`Halo 3 comes to PC as the next installment in Halo: The Master Chief Collection. Now optimized for PC, witness the Master Chief’s return to finish the fight between the Covenant, the Flood, and the entire Human race in this dramatic, pulse-pounding conclusion of the original Halo trilogy. With the fate of the galaxy hanging in the balance, the Master Chief returns to uncover an ancient secret hidden beneath the sands of Africa, which could hold the key to humanity’s salvation or destruction – an object that could change the tide of the Human-Covenant conflict.`,
            image:'https://static.wixstatic.com/media/d477fc_92c165639fa54e479f88ad81efdcd05d~mv2.jpg/v1/fill/w_672,h_374,al_c,lg_1,q_90/d477fc_92c165639fa54e479f88ad81efdcd05d~mv2.webp',
            download:'https://1fichier.com/?561xiuluddvtupv8qgv7'
        },
        {
            title:'MotoGP',
            description:`Rev up your engines for a new chapter of the MotoGP series! MotoGP 20 is back with a revived Managerial Career mode and more. Awaiting you are even more realistic graphics, improved gameplay, a new way to experience the historic content and all the excitement of the 2020 season! Decide whether to join a 2020 season team and race together with the official riders or join a totally brand new team following your manager’s advice. A complete entourage is ready to support you on path to the glory. MotoGP™20 introduces major graphic improvements to sky, asphalt, settings, weather, lighting, vegetation and damage on the bike, which will also have an effect on its overall performance. You will be able to enjoy more realistic physics, where you will have to learn to monitor your tire wear and the braking system. The new 3D models of the riders, the face scans of official team managers and new animations will make you feel even more immersed in the MotoGP™ world.`,
            image:'https://static.wixstatic.com/media/d477fc_711e1e3a491241398a0b042381f0e3d1~mv2.jpg',
            download:'https://1fichier.com/?bio88b702ha7o8k71g2k'
        },
        {
            title:'Maia',
            description:`Maia is a strange and hostile alien world, toxic to humans, yet lush with new life. Your mission is to colonise this poison eden, survive it's dangers and establish humanity's first foothold in the stars. Created by independent developer Simon Roth, Maia is a space colony simulation game about surviving and thriving on another world. Burrow into Maia's mineral rich crust to build and manage a complex base that fulfills your colonist's needs. They'll need somewhere to sleep, somewhere to build and a steady supply of food, water and energy.`,
            image:'https://static.wixstatic.com/media/d477fc_336d124c3a464281b159f0ad89806c47~mv2.jpg',
            download:'https://mega.nz/file/t6pRAa6b#Wz2t1EBJp9ozyE69P3G-dH3G7GXKvCyq9uFBHBTBh8E'
        },
        {
            title:'7 Days',
            description:`7 Days To Die is an open world game survival horror game with crafting and world-building content. The game is an unique combination of first person shooter, survival, tower defense, and role-playing games. Play the definitive zombie survival sandbox RPG that came first. Your objective in 7 Days to Die is to survival as long as possible, but with more days passing by the zombies will become much stronger. Navezgane awaits!`,
            image:'https://static.wixstatic.com/media/d477fc_c4c1b55d104a41df9bb2391afa2dd6ff~mv2.jpg',
            download:'http://www.mediafire.com/file/m086li6oo47cxjo/7.Days.To.Die.Alpha.19.5-0xdeadc0de.rar/file'
        },
        {
            title:'Far Cry',
            description:`Dive into a transformed vibrant post-apocalyptic Hope County, Montana, 17 years after a global nuclear catastrophe.Join fellow survivors and lead the fight against the dangerous new threat the Highwaymen, and their ruthless leaders The Twins, as they seek to take over the last remaining resources. Take up arms on your own or with a friend in two player co-op in an unpredictable and transformed world. Recruit an eclectic cast of Guns and Fangs for Hire and form alliances to fight by your side against the Highwaymen's unruly leaders The Twins. Recruit Specialists to upgrade your homebase, who will help unlock all new features including crafting weapons, gear and more. Engage the Highwaymen in Turf Wars and venture on Expeditions to memorable locations across the USA.`,
            image:'https://static.wixstatic.com/media/d477fc_643d5c9874734268bfa366218e873118~mv2.jpg',
            download:'https://1fichier.com/?rm9e5lss37ypxfichtrt'
        },
        {
            title:'Frostpunk',
            description:`Frostpunk is a brand-new title from the creators of This War of Mine. It’s a society survival game that asks what people are capable of when pushed to the brink of extinction. In an entirely frozen world, people develop steam-powered technology to oppose the overwhelming cold. The city’s ruler has to manage both the citizens and the infrastructure they live in. The leader’s tactical skills face challenges that will frequently question morality and the basic foundations of what we consider organized society. Optimization and resource management often clash with empathy and thoughtful decision-making. While city and society management will consume most of the ruler’s time, at some point exploration of the outside world is necessary to understand its history and present state.`,
            image:'https://static.wixstatic.com/media/d477fc_825223c7daa44458b21f70ea2de5f051~mv2.jpg',
            download:'https://1fichier.com/?0q8igucyhhag5sdhm6gi'
        },
        {
            title:'CARS 3',
            description:`Project CARS 3 is a racing video game developed by Slightly Mad Studios and published by Bandai Namco Entertainment. It is scheduled to be released on 28 August 2020 for Microsoft Windows, PlayStation 4 and Xbox One. Project CARS 3 introduces more customizable cars that are available to race over 140 global circuits. The game also features 24-hour cycles, various seasons, and weather effects. The career mode has been rebuilt, with the artificial intelligence being enhanced. The game will support VR on PC`,
            image:'https://static.wixstatic.com/media/d477fc_d4eb737ea5fc4d6998352e25f44efc55~mv2.jpg',
            download:'https://1fichier.com/?rw62tyfx7s0wjxvd0h43'
        },
        {
            title:'Need For Speed Most Wanted 2012',
            description:`Need For Speed Most Wanted 2012 is the 19th installment in the Need For Speed series and is an very amazing open world racing game. The open-world action in Need for Speed Most Wanted gives you the freedom to drive your way. Hit jumps and shortcuts, switch cars, lie low or head for terrain that plays to your vehicle’s unique strengths. Fight your way past cops and rivals using skill, high-end car tech and tons of nitrous. It’s all about you, your friends and a wild selection of cars. Let’s see what you can do.`,
            image:'https://static.wixstatic.com/media/d477fc_e6a0fe9044344a868db13f9674bd371f~mv2.jpg',
            download:'https://mega.nz/file/k7ZEBTxS#-TkVFBQJIcrdmxdMwr7gGAa4-Pknxhj9xUWHiOhHFtk'
        },
        {
            title:'Mafia 2',
            description:`Mafia 2 is published by 2K Games and is an adventure action shooter game that is set in the 1940s era of Empire Bay. Vito Scaletta has started to make a name for himself on the streets of Empire Bay as someone who can be trusted to get a job done. Together with his buddy Joe, he is working to prove himself to the Mafia, quickly escalating up the family ladder with crimes of larger reward, status and consequence… the life as a wise guy isn’t quite as untouchable as it seems.`,
            image:'https://static.wixstatic.com/media/d477fc_5bf6086ff8804e4092af91c085caad8b~mv2.jpg',
            download:'https://1fichier.com/?sm0yt0y2k6sqv1pztzj3'
        },
    ]
    const game = gameslist.find(gam => gam.title === parm.id);
    return (
        <div className='container'>
            <div className='imageContainer'>
                <img className='imageContainer_image' src={game.image} alt={game.image} />
            </div>
            <div className='titleContainer'>
            <h1>{game.title}</h1>
            </div>
            <div className='descriptionContainer'>
                <h2 style={{color:'lightgreen'}}>Description</h2>
                <br></br>
            <p>{game.description}</p>
            <a href={game.download} className='button'>Download</a>
            </div>
        </div>
    )
}
