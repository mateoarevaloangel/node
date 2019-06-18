const mongoose= require('mongoose');
const Shema = mongoose.Schema;

const albumSchema = new Shema({
    href: String,
    items:[{
        album_type :String,
        artists:[
            {
                external_urls: {
                    spotify: String
                },
                href: String,
                id: String,
                name: String,
                type: String,
                uri: String
            }
        ],
        available_markets: [String],
                external_urls: {
                    spotify: String
                },
                href: String,
                id: String,
                images: [
                    {
                        height: Number,
                        url: String,
                        width: Number
                    },
                    {
                        height: Number,
                        url: String,
                        width: Number
                    },
                    {
                        height: Number,
                        url: String,
                        width: Number
                    }
                ],
                name: String,
                release_date: String,
                release_date_precision: String,
                total_tracks: Number,
                type: String,
                uri: String
            },
            {
                album_type: String,
                artists: [
                    {
                        external_urls: {
                            spotify: String
                        },
                        href: String,
                        id: String,
                        name: String,
                        type: String,
                        uri: String
                    }
                ],
                available_markets: [ String ],
                external_urls: {
                    spotify: String
                },
                href: String,
                id: String,
                images: [
                    {
                        height: Number,
                        url: String,
                        width: Number
                    },
                    {
                        height: Number,
                        url: String,
                        width: Number
                    },
                    {
                        height: Number,
                        url: String,
                        width: Number
                    }
                ],
                name: String,
                release_date: String,
                release_date_precision: String,
                total_tracks: Number,
                type: String,
                uri: String
            }
        ],
        "limit": 20,
        "next": null,
        "offset": 0,
        "previous": null,
        "total": 2
    }
);

 module.exports = mongoose.model('Album', albumSchema);