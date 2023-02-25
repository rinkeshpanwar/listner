const ytdl = require('ytdl-core');
const fs = require('fs');

const convertorController = {};

convertorController.youtubeToMp3 = async (req, res) => {
    const { url } = req.body;
    let info = await ytdl.getInfo(url);
    console.log(info);
    let download = ytdl(url, {filter: 'audioonly'});
    res.setHeader('Content-Disposition', `attachment; filename=${info?.data?.videoDetails?.title}.mp3`);
    download.pipe(res);
    download.on('end', () => {
        res.end();
    });
}

module.exports = convertorController;