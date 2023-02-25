const ytdl = require('ytdl-core');

const convertorController = {};

convertorController.validateYoutubeUrl = async (req, res) => {
    try {
        const { url } = req.body;
        let info = await ytdl.getInfo(url);
        return res.json(info);
    } catch (error) {
        return res.status(400).json({error: 'Invalid URL'});
    }
}


convertorController.youtubeToMp3 = async (req, res) => {
    try {
        const url  = decodeURIComponent(req.params['url']);
        let info = await ytdl.getInfo(url);
        res.setHeader('Content-Disposition', `attachment; filename=${encodeURIComponent(info?.videoDetails?.title)}.mp3`);
        let download = ytdl(url, {filter: 'audioonly'});
        download.pipe(res);
        download.on('end', () => {
            res.end();
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({error: 'Invalid URL'});
    }
}

module.exports = convertorController;