import React from 'react';
import { useParams } from 'react-router-dom';
import './gamePage.scss';

export const GamePage = () => {
    let parm = useParams();


    const gameslist = [
        {
            title:'GTA5',
            description:`OS: Windows XP, Vista, 7, 8 or 10
            Processor: Intel Core 2 Quad CPU Q6600 2.40GHz / AMD Phenom 9850 Quad-Core Processor 2.5GHz or better 
            Memory: 4 GB RAM
            Graphics: Nvidia 9800 GT 1GB / AMD HD 4870 1GB (DirectX 10, 10.1, 11 or newer)
            Storage: 65 GB available space`,
            image:'https://cdn.realsport101.com/images/ncavvykf/realsport-production/a3ae4ca0ec848580428d416f3aeb458450c3346c-1279x720.png?w=686&h=386&auto=format',
            download:'magnet:?xt=urn:btih:6AF27C5A03509C4170833D9AC3985D1C9399D59C'
        },
        {
            title:'GTA5',
            description:`OS: Windows XP, Vista, 7, 8 or 10
            Processor: Intel Core 2 Quad CPU Q6600 2.40GHz / AMD Phenom 9850 Quad-Core Processor 2.5GHz or better 
            Memory: 4 GB RAM
            Graphics: Nvidia 9800 GT 1GB / AMD HD 4870 1GB (DirectX 10, 10.1, 11 or newer)
            Storage: 65 GB available space`,
            image:'https://cdn.realsport101.com/images/ncavvykf/realsport-production/a3ae4ca0ec848580428d416f3aeb458450c3346c-1279x720.png?w=686&h=386&auto=format',
            download:'magnet:?xt=urn:btih:6AF27C5A03509C4170833D9AC3985D1C9399D59C'
        },
        {
            title:'GTA5',
            description:`OS: Windows XP, Vista, 7, 8 or 10
            Processor: Intel Core 2 Quad CPU Q6600 2.40GHz / AMD Phenom 9850 Quad-Core Processor 2.5GHz or better 
            Memory: 4 GB RAM
            Graphics: Nvidia 9800 GT 1GB / AMD HD 4870 1GB (DirectX 10, 10.1, 11 or newer)
            Storage: 65 GB available space`,
            image:'https://cdn.realsport101.com/images/ncavvykf/realsport-production/a3ae4ca0ec848580428d416f3aeb458450c3346c-1279x720.png?w=686&h=386&auto=format',
            download:'magnet:?xt=urn:btih:6AF27C5A03509C4170833D9AC3985D1C9399D59C'
        },
        {
            title:'GTA5',
            description:`OS: Windows XP, Vista, 7, 8 or 10
            Processor: Intel Core 2 Quad CPU Q6600 2.40GHz / AMD Phenom 9850 Quad-Core Processor 2.5GHz or better 
            Memory: 4 GB RAM
            Graphics: Nvidia 9800 GT 1GB / AMD HD 4870 1GB (DirectX 10, 10.1, 11 or newer)
            Storage: 65 GB available space`,
            image:'https://cdn.realsport101.com/images/ncavvykf/realsport-production/a3ae4ca0ec848580428d416f3aeb458450c3346c-1279x720.png?w=686&h=386&auto=format',
            download:'magnet:?xt=urn:btih:6AF27C5A03509C4170833D9AC3985D1C9399D59C'
        },
        {
            title:'GTA5',
            description:`OS: Windows XP, Vista, 7, 8 or 10
            Processor: Intel Core 2 Quad CPU Q6600 2.40GHz / AMD Phenom 9850 Quad-Core Processor 2.5GHz or better 
            Memory: 4 GB RAM
            Graphics: Nvidia 9800 GT 1GB / AMD HD 4870 1GB (DirectX 10, 10.1, 11 or newer)
            Storage: 65 GB available space`,
            image:'https://cdn.realsport101.com/images/ncavvykf/realsport-production/a3ae4ca0ec848580428d416f3aeb458450c3346c-1279x720.png?w=686&h=386&auto=format',
            download:'magnet:?xt=urn:btih:6AF27C5A03509C4170833D9AC3985D1C9399D59C'
        },
        {
            title:'GTA5',
            description:`OS: Windows XP, Vista, 7, 8 or 10
            Processor: Intel Core 2 Quad CPU Q6600 2.40GHz / AMD Phenom 9850 Quad-Core Processor 2.5GHz or better 
            Memory: 4 GB RAM
            Graphics: Nvidia 9800 GT 1GB / AMD HD 4870 1GB (DirectX 10, 10.1, 11 or newer)
            Storage: 65 GB available space`,
            image:'https://cdn.realsport101.com/images/ncavvykf/realsport-production/a3ae4ca0ec848580428d416f3aeb458450c3346c-1279x720.png?w=686&h=386&auto=format',
            download:'magnet:?xt=urn:btih:6AF27C5A03509C4170833D9AC3985D1C9399D59C'
        },
        {
            title:'GTA5',
            description:`OS: Windows XP, Vista, 7, 8 or 10
            Processor: Intel Core 2 Quad CPU Q6600 2.40GHz / AMD Phenom 9850 Quad-Core Processor 2.5GHz or better 
            Memory: 4 GB RAM
            Graphics: Nvidia 9800 GT 1GB / AMD HD 4870 1GB (DirectX 10, 10.1, 11 or newer)
            Storage: 65 GB available space`,
            image:'https://cdn.realsport101.com/images/ncavvykf/realsport-production/a3ae4ca0ec848580428d416f3aeb458450c3346c-1279x720.png?w=686&h=386&auto=format',
            download:'magnet:?xt=urn:btih:6AF27C5A03509C4170833D9AC3985D1C9399D59C'
        },
        {
            title:'GTA5',
            description:`OS: Windows XP, Vista, 7, 8 or 10
            Processor: Intel Core 2 Quad CPU Q6600 2.40GHz / AMD Phenom 9850 Quad-Core Processor 2.5GHz or better 
            Memory: 4 GB RAM
            Graphics: Nvidia 9800 GT 1GB / AMD HD 4870 1GB (DirectX 10, 10.1, 11 or newer)
            Storage: 65 GB available space`,
            image:'https://cdn.realsport101.com/images/ncavvykf/realsport-production/a3ae4ca0ec848580428d416f3aeb458450c3346c-1279x720.png?w=686&h=386&auto=format',
            download:'magnet:?xt=urn:btih:6AF27C5A03509C4170833D9AC3985D1C9399D59C'
        },
    ]
    const game = gameslist.find(gam => gam.title === parm.id);
    console.log(parm);
    console.log(game);
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
