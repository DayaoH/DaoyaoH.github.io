/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.1.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: fit,
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 's5',
                            symbolName: 's5',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 's4',
                            symbolName: 's4',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 's3',
                            symbolName: 's3',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 's2',
                            symbolName: 's2',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 's1',
                            symbolName: 's1',
                            display: 'block',
                            type: 'rect',
                            rect: ['0px', '0', '1206', '1206', 'auto', 'auto']
                        },
                        {
                            id: 'box',
                            symbolName: 'box',
                            type: 'rect',
                            rect: ['1', '1090', '748', '939', 'auto', 'auto']
                        },
                        {
                            id: 'lBtn',
                            symbolName: 'lBtn',
                            type: 'rect',
                            rect: ['31', '560', '95', '85', 'auto', 'auto'],
                            userClass: ""
                        },
                        {
                            id: 'rBtn',
                            symbolName: 'rBtn',
                            type: 'rect',
                            rect: ['623', '560', '95', '85', 'auto', 'auto'],
                            userClass: ""
                        },
                        {
                            id: 'timer',
                            symbolName: 'timer',
                            type: 'rect',
                            rect: ['91px', '32', '248', '105', 'auto', 'auto']
                        },
                        {
                            id: 'puz',
                            symbolName: 'puz',
                            type: 'rect',
                            rect: ['411px', '32', '248', '105', 'auto', 'auto']
                        },
                        {
                            id: 'musicBtn',
                            symbolName: 'musicBtn',
                            type: 'rect',
                            rect: ['667px', '15px', '70', '69', 'auto', 'auto']
                        },
                        {
                            id: 'boxPop',
                            symbolName: 'boxPop',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '749', '1206', 'auto', 'auto']
                        },
                        {
                            id: 'quesPop',
                            symbolName: 'quesPop',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '750', '1206', 'auto', 'auto']
                        },
                        {
                            id: 'puzPop',
                            symbolName: 'puzPop',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '750', '1206', 'auto', 'auto']
                        },
                        {
                            id: 'rulePop',
                            symbolName: 'rulePop',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '750', '1206', 'auto', 'auto']
                        },
                        {
                            id: 'safePop',
                            symbolName: 'safePop',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '750', '1206', 'auto', 'auto']
                        },
                        {
                            id: 'End',
                            symbolName: 'End',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'lightmask',
                            display: 'none',
                            type: 'rect',
                            rect: ['-2px', '0px', '750px', '1206px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'winPop',
                            symbolName: 'winPop',
                            display: 'none',
                            type: 'rect',
                            rect: ['9px', '71', '730', '861', 'auto', 'auto']
                        },
                        {
                            id: 'losePop',
                            symbolName: 'losePop',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'bg',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['44', '106', '320px', '45px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            loop: 'loop',
                            source: [aud+"bg.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'puzzlesPreload',
                            symbolName: 'puzzlesPreload',
                            type: 'rect',
                            rect: ['0px', '0px', '347', '347', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '750px', '1206px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 63268.571,
                    autoPlay: true,
                    labels: {
                        "gamestart": 0,
                        "s1_out": 1000,
                        "s1": 1750,
                        "s2": 2500,
                        "s2_out": 3250,
                        "s3": 4000,
                        "s3_out": 4750,
                        "s4": 5500,
                        "s4_out": 6250,
                        "s5": 7000,
                        "s5_out": 7750,
                        "win": 8500,
                        "lose": 9250,
                        "end": 10000
                    },
                    data: [
                        [
                            "eid2355",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${lightmask}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2101",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${lightmask}",
                            '1',
                            '0'
                        ],
                        [
                            "eid9565",
                            "opacity",
                            2500,
                            250,
                            "linear",
                            "${lightmask}",
                            '1',
                            '0'
                        ],
                        [
                            "eid9598",
                            "opacity",
                            3250,
                            250,
                            "linear",
                            "${lightmask}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12494",
                            "opacity",
                            4000,
                            250,
                            "linear",
                            "${lightmask}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12497",
                            "opacity",
                            4750,
                            250,
                            "linear",
                            "${lightmask}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14686",
                            "opacity",
                            5500,
                            250,
                            "linear",
                            "${lightmask}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14689",
                            "opacity",
                            6250,
                            250,
                            "linear",
                            "${lightmask}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16805",
                            "opacity",
                            7000,
                            250,
                            "linear",
                            "${lightmask}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16806",
                            "opacity",
                            7750,
                            250,
                            "linear",
                            "${lightmask}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19203",
                            "opacity",
                            8500,
                            250,
                            "linear",
                            "${lightmask}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19898",
                            "opacity",
                            9250,
                            250,
                            "linear",
                            "${lightmask}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19895",
                            "opacity",
                            10000,
                            250,
                            "linear",
                            "${lightmask}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16837",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${s5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16838",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${s5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid22923",
                            "left",
                            8500,
                            0,
                            "easeOutQuad",
                            "${winPop}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid40901",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${puzzlesPreload}",
                            '1',
                            '1'
                        ],
                        [
                            "eid12498",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${s3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12499",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${s3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid682",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${quesPop}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2102",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${s1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2357",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${s1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2658",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${s1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1584",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${rulePop}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14682",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${s4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14683",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${s4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18831",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${lightmask}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid19204",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${winPop}",
                            'none',
                            'block'
                        ],
                        [
                            "eid19994",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${winPop}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20863",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${End}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40903",
                            "top",
                            0,
                            0,
                            "linear",
                            "${puzzlesPreload}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid416",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${boxPop}",
                            'none',
                            'none'
                        ],
                        [
                            "eid988",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${puzPop}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2356",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${lightmask}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9631",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${lightmask}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9632",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${lightmask}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9629",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${lightmask}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9630",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${lightmask}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9566",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${lightmask}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9597",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${lightmask}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9693",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${lightmask}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12492",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${lightmask}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12493",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${lightmask}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12495",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${lightmask}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12496",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${lightmask}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14684",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${lightmask}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14685",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${lightmask}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14687",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${lightmask}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14688",
                            "display",
                            6750,
                            0,
                            "linear",
                            "${lightmask}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16801",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${lightmask}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16802",
                            "display",
                            7250,
                            0,
                            "linear",
                            "${lightmask}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16803",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${lightmask}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16804",
                            "display",
                            8250,
                            0,
                            "linear",
                            "${lightmask}",
                            'block',
                            'none'
                        ],
                        [
                            "eid19201",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${lightmask}",
                            'none',
                            'block'
                        ],
                        [
                            "eid19202",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${lightmask}",
                            'block',
                            'none'
                        ],
                        [
                            "eid19896",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${lightmask}",
                            'none',
                            'block'
                        ],
                        [
                            "eid19897",
                            "display",
                            9750,
                            0,
                            "linear",
                            "${lightmask}",
                            'block',
                            'none'
                        ],
                        [
                            "eid19893",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${lightmask}",
                            'none',
                            'block'
                        ],
                        [
                            "eid19894",
                            "display",
                            10250,
                            0,
                            "linear",
                            "${lightmask}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2779",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${s2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11709",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${s2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20091",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${losePop}",
                            'none',
                            'block'
                        ],
                        [
                            "eid22366",
                            "display",
                            9750,
                            0,
                            "linear",
                            "${losePop}",
                            'block',
                            'none'
                        ],
                        [
                            "eid8491",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${safePop}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40902",
                            "left",
                            0,
                            0,
                            "linear",
                            "${puzzlesPreload}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid40900",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${puzzlesPreload}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "bg": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'scene1',
                            type: 'image',
                            rect: ['0px', '0px', '1206px', '1206px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene1/scene1.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1206px', '1206px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid6",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${scene1}",
                            '0px',
                            '-456px'
                        ]
                    ]
                }
            },
            "rBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'rightArrow',
                            rect: ['0px', '0px', '95px', '85px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/rightArrow.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '95px', '85px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid17",
                            "scaleX",
                            0,
                            0,
                            "easeOutQuad",
                            "${rightArrow}",
                            '1',
                            '1'
                        ],
                        [
                            "eid19",
                            "scaleX",
                            250,
                            0,
                            "easeOutQuad",
                            "${rightArrow}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid18",
                            "scaleY",
                            0,
                            0,
                            "easeOutQuad",
                            "${rightArrow}",
                            '1',
                            '1'
                        ],
                        [
                            "eid20",
                            "scaleY",
                            250,
                            0,
                            "easeOutQuad",
                            "${rightArrow}",
                            '1',
                            '0.9'
                        ]
                    ]
                }
            },
            "lBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '95px', '85px', 'auto', 'auto'],
                            id: 'leftArrow',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/leftArrow.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '95px', '85px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid21",
                            "scaleX",
                            0,
                            0,
                            "easeOutQuad",
                            "${leftArrow}",
                            '1',
                            '1'
                        ],
                        [
                            "eid22",
                            "scaleX",
                            250,
                            0,
                            "easeOutQuad",
                            "${leftArrow}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid23",
                            "scaleY",
                            0,
                            0,
                            "easeOutQuad",
                            "${leftArrow}",
                            '1',
                            '1'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            250,
                            0,
                            "easeOutQuad",
                            "${leftArrow}",
                            '1',
                            '0.9'
                        ]
                    ]
                }
            },
            "s1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1206px', '1206px', 'auto', 'auto'],
                            id: 'scene1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene1/scene1.jpg', '0px', '0px']
                        },
                        {
                            rect: ['123px', '681', '147', '129', 'auto', 'auto'],
                            id: 'wcan',
                            symbolName: 'wcan',
                            type: 'rect'
                        },
                        {
                            rect: ['31px', '741', '216', '116', 'auto', 'auto'],
                            id: 'so',
                            symbolName: 'so',
                            type: 'rect'
                        },
                        {
                            rect: ['25px', '553px', '985px', '551px', 'auto', 'auto'],
                            id: 'bed',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene1/bed.png', '0px', '0px']
                        },
                        {
                            rect: ['510px', '884px', '140px', '107px', 'auto', 'auto'],
                            id: 'bed_icon',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene1/bed_icon.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '955px', '1206px', '251px', 'auto', 'auto'],
                            id: 'frontplants',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene1/frontplants.png', '0px', '0px']
                        },
                        {
                            rect: ['1009px', '370', '96', '112', 'auto', 'auto'],
                            id: 'di',
                            symbolName: 'di',
                            type: 'rect'
                        },
                        {
                            rect: ['1058px', '697', '149', '207', 'auto', 'auto'],
                            id: 'wfinger',
                            symbolName: 'wfinger',
                            type: 'rect'
                        },
                        {
                            rect: ['304px', '28', '523', '503', 'auto', 'auto'],
                            id: 'pting',
                            symbolName: 'pting',
                            type: 'rect'
                        },
                        {
                            rect: ['566px', '569', '200', '122', 'auto', 'auto'],
                            id: 'pilow',
                            symbolName: 'pilow',
                            type: 'rect'
                        },
                        {
                            rect: ['123px', '685px', '149px', '129px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'wcanBtn',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['533px', '355px', '140px', '151px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'diagBtn',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['434px', '598px', '108px', '99px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'ruleBtn',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1206px', '1206px']
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: false,
                    data: [
                        [
                            "eid107",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${bed_icon}",
                            '510px',
                            '53px'
                        ],
                        [
                            "eid109",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${bed}",
                            '25px',
                            '-432px'
                        ],
                        [
                            "eid102",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${wcan}",
                            '123px',
                            '-334px'
                        ],
                        [
                            "eid104",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${frontplants}",
                            '0px',
                            '-457px'
                        ],
                        [
                            "eid100",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${pilow}",
                            '566px',
                            '109px'
                        ],
                        [
                            "eid110",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${di}",
                            '1009px',
                            '552px'
                        ],
                        [
                            "eid106",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${wfinger}",
                            '1058px',
                            '601px'
                        ],
                        [
                            "eid2063",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${diagBtn}",
                            '140px',
                            '140px'
                        ],
                        [
                            "eid1852",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${ruleBtn}",
                            '890px',
                            '434px'
                        ],
                        [
                            "eid105",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${wcanBtn}",
                            '123px',
                            '-334px'
                        ],
                        [
                            "eid2062",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${diagBtn}",
                            '151px',
                            '151px'
                        ],
                        [
                            "eid108",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${pting}",
                            '304px',
                            '-153px'
                        ],
                        [
                            "eid101",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${diagBtn}",
                            '1009px',
                            '533px'
                        ],
                        [
                            "eid27",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${scene1}",
                            '0px',
                            '-456px'
                        ],
                        [
                            "eid103",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${so}",
                            '31px',
                            '-426px'
                        ],
                        [
                            "eid2065",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${diagBtn}",
                            '355px',
                            '355px'
                        ]
                    ]
                }
            },
            "wcan": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '147px', '129px', 'auto', 'auto'],
                            id: 'watercan',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene1/watercan.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '147px', '129px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid29",
                            "top",
                            250,
                            500,
                            "easeOutBack",
                            "${watercan}",
                            '0px',
                            '-152px'
                        ],
                        [
                            "eid31",
                            "top",
                            1250,
                            250,
                            "easeOutBack",
                            "${watercan}",
                            '-152px',
                            '0px'
                        ]
                    ]
                }
            },
            "pting": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '523px', '503px', 'auto', 'auto'],
                            id: 'painting_shadow',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene1/painting_shadow.png', '0px', '0px']
                        },
                        {
                            rect: ['30px', '5px', '489px', '466px', 'auto', 'auto'],
                            id: 'painting',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene1/painting.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '523px', '503px', 'auto', 'auto'],
                            display: 'none',
                            id: 'block',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '523px', '503px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid35",
                            "rotateZ",
                            250,
                            500,
                            "easeOutBack",
                            "${painting_shadow}",
                            '0deg',
                            '45deg'
                        ],
                        [
                            "eid39",
                            "rotateZ",
                            1250,
                            250,
                            "easeOutBack",
                            "${painting_shadow}",
                            '45deg',
                            '0deg'
                        ],
                        [
                            "eid34",
                            "rotateZ",
                            250,
                            500,
                            "easeOutBack",
                            "${painting}",
                            '0deg',
                            '45deg'
                        ],
                        [
                            "eid38",
                            "rotateZ",
                            1250,
                            250,
                            "easeOutBack",
                            "${painting}",
                            '45deg',
                            '0deg'
                        ],
                        [
                            "eid114",
                            "-webkit-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${painting_shadow}",
                            [100,0],
                            [100,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41577",
                            "-moz-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${painting_shadow}",
                            [100,0],
                            [100,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41578",
                            "-ms-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${painting_shadow}",
                            [100,0],
                            [100,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41579",
                            "msTransformOrigin",
                            250,
                            0,
                            "easeOutBack",
                            "${painting_shadow}",
                            [100,0],
                            [100,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41580",
                            "-o-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${painting_shadow}",
                            [100,0],
                            [100,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41581",
                            "transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${painting_shadow}",
                            [100,0],
                            [100,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid145",
                            "display",
                            250,
                            0,
                            "linear",
                            "${block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid146",
                            "display",
                            1420,
                            0,
                            "linear",
                            "${block}",
                            'block',
                            'none'
                        ],
                        [
                            "eid112",
                            "-webkit-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${painting}",
                            [100,0],
                            [100,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41582",
                            "-moz-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${painting}",
                            [100,0],
                            [100,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41583",
                            "-ms-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${painting}",
                            [100,0],
                            [100,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41584",
                            "msTransformOrigin",
                            250,
                            0,
                            "easeOutBack",
                            "${painting}",
                            [100,0],
                            [100,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41585",
                            "-o-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${painting}",
                            [100,0],
                            [100,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41586",
                            "transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${painting}",
                            [100,0],
                            [100,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "so": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '216px', '116px', 'auto', 'auto'],
                            id: 'soil',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene1/soil.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '216px', '116px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid41",
                            "rotateZ",
                            500,
                            500,
                            "easeOutQuad",
                            "${soil}",
                            '0deg',
                            '3deg'
                        ],
                        [
                            "eid42",
                            "rotateZ",
                            1000,
                            500,
                            "easeOutQuad",
                            "${soil}",
                            '3deg',
                            '-3deg'
                        ],
                        [
                            "eid43",
                            "rotateZ",
                            1500,
                            500,
                            "easeOutQuad",
                            "${soil}",
                            '-3deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "pilow": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'pillow_shadow',
                            opacity: '1',
                            rect: ['0px', '21px', '200px', '121px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene1/pillow_shadow.png', '0px', '0px']
                        },
                        {
                            rect: ['67px', '44px', '75px', '75px', 'auto', 'auto'],
                            id: 'puzzle',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_2.png', '0px', '0px']
                        },
                        {
                            rect: ['9px', '0px', '191px', '116px', 'auto', 'auto'],
                            id: 'pillow',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene1/pillow.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '-123px', '200px', '240px', 'auto', 'auto'],
                            display: 'none',
                            id: 'block',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '-123px', '200px', '119px', 'auto', 'auto'],
                            display: 'none',
                            id: 'touch',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '122px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    labels: {
                        "out": 1250
                    },
                    data: [
                        [
                            "eid50",
                            "scaleX",
                            250,
                            500,
                            "easeOutBack",
                            "${pillow_shadow}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid61",
                            "scaleX",
                            1250,
                            250,
                            "easeOutBack",
                            "${pillow_shadow}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid1895",
                            "display",
                            661,
                            0,
                            "linear",
                            "${touch}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1897",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${touch}",
                            'block',
                            'none'
                        ],
                        [
                            "eid51",
                            "scaleY",
                            250,
                            500,
                            "easeOutBack",
                            "${pillow_shadow}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid62",
                            "scaleY",
                            1250,
                            250,
                            "easeOutBack",
                            "${pillow_shadow}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid52",
                            "top",
                            250,
                            500,
                            "easeOutBack",
                            "${pillow_shadow}",
                            '1px',
                            '21px'
                        ],
                        [
                            "eid60",
                            "top",
                            1250,
                            250,
                            "easeOutBack",
                            "${pillow_shadow}",
                            '21px',
                            '1px'
                        ],
                        [
                            "eid157",
                            "display",
                            250,
                            0,
                            "easeOutBack",
                            "${block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid158",
                            "display",
                            661,
                            0,
                            "easeOutBack",
                            "${block}",
                            'block',
                            'none'
                        ],
                        [
                            "eid49",
                            "top",
                            250,
                            500,
                            "easeOutBack",
                            "${pillow}",
                            '0px',
                            '-116px'
                        ],
                        [
                            "eid55",
                            "top",
                            1250,
                            250,
                            "easeOutBack",
                            "${pillow}",
                            '-116px',
                            '0px'
                        ],
                        [
                            "eid53",
                            "opacity",
                            250,
                            500,
                            "easeOutBack",
                            "${pillow_shadow}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid63",
                            "opacity",
                            1250,
                            250,
                            "easeOutBack",
                            "${pillow_shadow}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            },
            "di": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'diag',
                            type: 'image',
                            rect: ['0px', '15px', '96px', '96px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene1/diag.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0', '0']],
                            display: 'none',
                            rect: ['17px', '4px', '71px', '117px', 'auto', 'auto'],
                            id: 'diag__',
                            fill: ['rgba(0,0,0,0)', 'images/scene1/diag__.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '96px', '112px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid2031",
                            "-webkit-transform-origin",
                            1000,
                            0,
                            "easeOutBack",
                            "${diag__}",
                            [104.58,87.18],
                            [104.58,87.18],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41587",
                            "-moz-transform-origin",
                            1000,
                            0,
                            "easeOutBack",
                            "${diag__}",
                            [104.58,87.18],
                            [104.58,87.18],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41588",
                            "-ms-transform-origin",
                            1000,
                            0,
                            "easeOutBack",
                            "${diag__}",
                            [104.58,87.18],
                            [104.58,87.18],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41589",
                            "msTransformOrigin",
                            1000,
                            0,
                            "easeOutBack",
                            "${diag__}",
                            [104.58,87.18],
                            [104.58,87.18],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41590",
                            "-o-transform-origin",
                            1000,
                            0,
                            "easeOutBack",
                            "${diag__}",
                            [104.58,87.18],
                            [104.58,87.18],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41591",
                            "transform-origin",
                            1000,
                            0,
                            "easeOutBack",
                            "${diag__}",
                            [104.58,87.18],
                            [104.58,87.18],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid74",
                            "scaleX",
                            500,
                            500,
                            "easeOutBack",
                            "${diag__}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "scaleX",
                            250,
                            500,
                            "easeOutBack",
                            "${diag}",
                            '0',
                            '1'
                        ],
                        [
                            "eid75",
                            "scaleY",
                            500,
                            500,
                            "easeOutBack",
                            "${diag__}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1998",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${diag__}",
                            '71px',
                            '71px'
                        ],
                        [
                            "eid2023",
                            "-webkit-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${diag}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41592",
                            "-moz-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${diag}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41593",
                            "-ms-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${diag}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41594",
                            "msTransformOrigin",
                            250,
                            0,
                            "easeOutBack",
                            "${diag}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41595",
                            "-o-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${diag}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41596",
                            "transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${diag}",
                            [100,100],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid78",
                            "display",
                            500,
                            0,
                            "easeOutBack",
                            "${diag__}",
                            'none',
                            'block'
                        ],
                        [
                            "eid77",
                            "scaleY",
                            250,
                            500,
                            "easeOutBack",
                            "${diag}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2029",
                            "top",
                            1000,
                            0,
                            "easeOutBack",
                            "${diag__}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid2028",
                            "left",
                            1000,
                            0,
                            "easeOutBack",
                            "${diag__}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid1999",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${diag__}",
                            '117px',
                            '117px'
                        ]
                    ]
                }
            },
            "wfinger": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['10px', '106px', '75px', '53px', 'auto', 'auto'],
                            id: 'finger_shadow',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene1/finger_shadow.png', '0px', '0px']
                        },
                        {
                            rect: ['13px', '96px', '70px', '59px', 'auto', 'auto'],
                            id: 'finger',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene1/finger.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '149px', '207px', 'auto', 'auto'],
                            id: 'wallhole',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene1/wallhole.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '149px', '207px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '149px', '207px']
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: true,
                    labels: {
                        "out": 3500
                    },
                    data: [
                        [
                            "eid81",
                            "left",
                            250,
                            750,
                            "easeOutQuad",
                            "${finger}",
                            '13px',
                            '23px'
                        ],
                        [
                            "eid83",
                            "left",
                            1000,
                            250,
                            "easeOutQuad",
                            "${finger}",
                            '23px',
                            '13px'
                        ],
                        [
                            "eid87",
                            "left",
                            3500,
                            250,
                            "easeOutQuad",
                            "${finger}",
                            '13px',
                            '78px'
                        ],
                        [
                            "eid82",
                            "left",
                            250,
                            750,
                            "easeOutQuad",
                            "${finger_shadow}",
                            '10px',
                            '20px'
                        ],
                        [
                            "eid84",
                            "left",
                            1000,
                            250,
                            "easeOutQuad",
                            "${finger_shadow}",
                            '20px',
                            '10px'
                        ],
                        [
                            "eid88",
                            "left",
                            3500,
                            250,
                            "easeOutQuad",
                            "${finger_shadow}",
                            '10px',
                            '75px'
                        ],
                        [
                            "eid199",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Rectangle5}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "puz": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'puzzleremain',
                            rect: ['0px', '0px', '248px', '105px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzleremain.png', '0px', '0px']
                        },
                        {
                            rect: ['105px', '41px', '123px', '64px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [48, 'px'], 'rgba(255,255,255,1.00)', '900', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​0 / 9</p>',
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 0],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '248px', '105px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "timer": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '248px', '105px', 'auto', 'auto'],
                            id: 'timeremain',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/timeremain.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['93px', '43px', '155px', '62px', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​04:59</p>',
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 0],
                            font: ['Arial, Helvetica, sans-serif', [48, 'px'], 'rgba(255,255,255,1.00)', '900', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '248px', '105px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "box": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'roomname',
                            rect: ['277px', '0px', '193px', '61px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/roomname_w1.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'block',
                            symbolName: 'bbox',
                            rect: ['0', '61px', '748', '878', 'auto', 'auto'],
                            id: 'bbox'
                        },
                        {
                            type: 'rect',
                            id: 'nextBtn',
                            symbolName: 'nextBtn',
                            rect: ['562', '56', '157', '45', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'prevBtn',
                            symbolName: 'prevBtn',
                            rect: ['28', '56', '158', '45', 'auto', 'auto']
                        },
                        {
                            rect: ['242px', '61px', '264px', '61px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'bboxTouch',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'bbox',
                            rect: ['0', '61px', '748', '878', 'auto', 'auto'],
                            id: 'bboxCopy'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '748px', '939px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "puzzle": 1000
                    },
                    data: [
                        [
                            "eid318",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${bbox}",
                            'block',
                            'none'
                        ],
                        [
                            "eid312",
                            "scaleX",
                            1000,
                            250,
                            "easeOutBack",
                            "${bboxCopy}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid313",
                            "scaleX",
                            1750,
                            250,
                            "easeOutBack",
                            "${bboxCopy}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid319",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${bboxCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid314",
                            "scaleY",
                            1000,
                            250,
                            "easeOutBack",
                            "${bboxCopy}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid315",
                            "scaleY",
                            1750,
                            250,
                            "easeOutBack",
                            "${bboxCopy}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid350",
                            "display",
                            1000,
                            0,
                            "easeOutQuad",
                            "${bboxTouch}",
                            'block',
                            'none'
                        ],
                        [
                            "eid316",
                            "top",
                            1000,
                            250,
                            "easeOutBack",
                            "${bboxCopy}",
                            '61px',
                            '-81px'
                        ],
                        [
                            "eid317",
                            "top",
                            1750,
                            250,
                            "easeOutBack",
                            "${bboxCopy}",
                            '-81px',
                            '61px'
                        ]
                    ]
                }
            },
            "bbox": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'box',
                            rect: ['0px', '0px', '748px', '878px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/box.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'arrow',
                            rect: ['345px', '26px', '58px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/arrow.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '748px', '878px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "prevBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'prev',
                            rect: ['0px', '0px', '158px', '45px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/prev.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '158px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid323",
                            "scaleY",
                            0,
                            125,
                            "easeOutQuad",
                            "${prev}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid325",
                            "scaleY",
                            125,
                            125,
                            "easeOutQuad",
                            "${prev}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid322",
                            "scaleX",
                            0,
                            125,
                            "easeOutQuad",
                            "${prev}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid324",
                            "scaleX",
                            125,
                            125,
                            "easeOutQuad",
                            "${prev}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            },
            "nextBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'next',
                            rect: ['0px', '0px', '157px', '45px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/next.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '157px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid338",
                            "scaleX",
                            0,
                            125,
                            "easeOutQuad",
                            "${next}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid339",
                            "scaleX",
                            125,
                            125,
                            "easeOutQuad",
                            "${next}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid336",
                            "scaleY",
                            0,
                            125,
                            "easeOutQuad",
                            "${next}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid337",
                            "scaleY",
                            125,
                            125,
                            "easeOutQuad",
                            "${next}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            },
            "boxPop": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '748px', '1206px', 'auto', 'auto'],
                            opacity: '0.9',
                            id: 'mask',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['1px', '1152px', '748px', '878px', 'auto', 'auto'],
                            id: 'box2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/box.png', '0px', '0px']
                        },
                        {
                            rect: ['346px', '1177px', '58px', '16px', 'auto', 'auto'],
                            id: 'arrow',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/arrow.png', '0px', '0px']
                        },
                        {
                            rect: ['270px', '1152px', '208px', '84px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'arrowBtn',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'image',
                            id: 'puzzle_1',
                            opacity: '0',
                            rect: ['273px', '788px', '200px', '200px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_none.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'puzzle_2',
                            opacity: '0',
                            rect: ['273px', '788px', '200px', '200px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_none.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'puzzle_3',
                            opacity: '0',
                            rect: ['275px', '788px', '200px', '200px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_none.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'puzzle_4',
                            opacity: '0',
                            rect: ['275px', '788px', '200px', '200px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_none.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'puzzle_5',
                            opacity: '0',
                            rect: ['273px', '808px', '200px', '200px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_none.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'puzzle_6',
                            opacity: '0',
                            rect: ['275px', '788px', '200px', '200px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_none.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'puzzle_7',
                            opacity: '0',
                            rect: ['275px', '788px', '200px', '200px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_none.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'puzzle_8',
                            opacity: '0',
                            rect: ['273px', '788px', '200px', '200px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_none.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'puzzle_9',
                            opacity: '0',
                            rect: ['275px', '788px', '200px', '200px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_none.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '749px', '1206px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: false,
                    labels: {
                        "in": 250,
                        "out": 2000
                    },
                    data: [
                        [
                            "eid19143",
                            "location",
                            333,
                            500,
                            "easeOutBack",
                            "${puzzle_5}",
                            [[373, 908, 0, 0, 0, 0,0],[373, 888, 0, 0, 0, 0,20]]
                        ],
                        [
                            "eid19197",
                            "location",
                            2000,
                            250,
                            "easeOutQuad",
                            "${puzzle_5}",
                            [[373, 888, 0, 0, 0, 0,0],[373, 1626, 0, 0, 0, 0,738]]
                        ],
                        [
                            "eid19179",
                            "opacity",
                            333,
                            250,
                            "easeOutBack",
                            "${puzzle_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19138",
                            "location",
                            333,
                            500,
                            "easeOutBack",
                            "${puzzle_6}",
                            [[375, 888, 0, 0, 0, 0,0],[541, 888, 0, 0, 0, 0,166]]
                        ],
                        [
                            "eid19194",
                            "location",
                            2000,
                            250,
                            "easeOutQuad",
                            "${puzzle_6}",
                            [[541, 888, 0, 0, 0, 0,0],[541, 1626, 0, 0, 0, 0,738]]
                        ],
                        [
                            "eid381",
                            "top",
                            250,
                            500,
                            "easeOutBack",
                            "${arrow}",
                            '1177px',
                            '443px'
                        ],
                        [
                            "eid388",
                            "top",
                            2000,
                            250,
                            "easeOutQuad",
                            "${arrow}",
                            '443px',
                            '1177px'
                        ],
                        [
                            "eid383",
                            "rotateZ",
                            250,
                            500,
                            "easeOutBack",
                            "${arrow}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid391",
                            "rotateZ",
                            2000,
                            250,
                            "easeOutQuad",
                            "${arrow}",
                            '180deg',
                            '0deg'
                        ],
                        [
                            "eid19139",
                            "location",
                            333,
                            500,
                            "easeOutBack",
                            "${puzzle_4}",
                            [[375, 888, 0, 0, 0, 0,0],[209, 888, 0, 0, 0, 0,166]]
                        ],
                        [
                            "eid19189",
                            "location",
                            2000,
                            250,
                            "easeOutQuad",
                            "${puzzle_4}",
                            [[209, 888, 0, 0, 0, 0,0],[209, 1626, 0, 0, 0, 0,738]]
                        ],
                        [
                            "eid19177",
                            "opacity",
                            333,
                            250,
                            "easeOutBack",
                            "${puzzle_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19136",
                            "location",
                            333,
                            500,
                            "easeOutBack",
                            "${puzzle_8}",
                            [[373, 888, 0, 0, 0, 0,0],[373, 1059, 0, 0, 0, 0,171]]
                        ],
                        [
                            "eid19191",
                            "location",
                            2000,
                            250,
                            "easeOutQuad",
                            "${puzzle_8}",
                            [[373, 1059, 0, 0, 0, 0,0],[373, 1797, 0, 0, 0, 0,738]]
                        ],
                        [
                            "eid19137",
                            "location",
                            333,
                            500,
                            "easeOutBack",
                            "${puzzle_7}",
                            [[375, 888, 0, 0, 0, 0,0],[209, 1059, 0, 0, 0, 0,238.32]]
                        ],
                        [
                            "eid19190",
                            "location",
                            2000,
                            250,
                            "easeOutQuad",
                            "${puzzle_7}",
                            [[209, 1059, 0, 0, 0, 0,0],[209, 1797, 0, 0, 0, 0,738]]
                        ],
                        [
                            "eid19175",
                            "opacity",
                            333,
                            250,
                            "easeOutBack",
                            "${puzzle_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19140",
                            "location",
                            333,
                            500,
                            "easeOutBack",
                            "${puzzle_3}",
                            [[375, 888, 0, 0, 0, 0,0],[541, 721, 0, 0, 0, 0,235.47]]
                        ],
                        [
                            "eid19196",
                            "location",
                            2000,
                            250,
                            "easeOutQuad",
                            "${puzzle_3}",
                            [[541, 721, 0, 0, 0, 0,0],[541, 1459, 0, 0, 0, 0,738]]
                        ],
                        [
                            "eid19173",
                            "opacity",
                            333,
                            250,
                            "easeOutBack",
                            "${puzzle_8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid380",
                            "top",
                            250,
                            500,
                            "easeOutBack",
                            "${box2}",
                            '1152px',
                            '403px'
                        ],
                        [
                            "eid389",
                            "top",
                            2000,
                            250,
                            "easeOutQuad",
                            "${box2}",
                            '403px',
                            '1152px'
                        ],
                        [
                            "eid19174",
                            "opacity",
                            333,
                            250,
                            "easeOutBack",
                            "${puzzle_9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19178",
                            "opacity",
                            333,
                            250,
                            "easeOutBack",
                            "${puzzle_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19172",
                            "opacity",
                            333,
                            250,
                            "easeOutBack",
                            "${puzzle_7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19176",
                            "opacity",
                            333,
                            250,
                            "easeOutBack",
                            "${puzzle_6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19142",
                            "location",
                            333,
                            500,
                            "easeOutBack",
                            "${puzzle_1}",
                            [[373, 888, 0, 0, 0, 0,0],[209, 721, 0, 0, 0, 0,234.06]]
                        ],
                        [
                            "eid19195",
                            "location",
                            2000,
                            250,
                            "easeOutQuad",
                            "${puzzle_1}",
                            [[209, 721, 0, 0, 0, 0,0],[209, 1459, 0, 0, 0, 0,738]]
                        ],
                        [
                            "eid405",
                            "top",
                            250,
                            500,
                            "easeOutBack",
                            "${arrowBtn}",
                            '1152px',
                            '403px'
                        ],
                        [
                            "eid375",
                            "opacity",
                            250,
                            250,
                            "easeOutQuad",
                            "${mask}",
                            '0',
                            '0.9'
                        ],
                        [
                            "eid393",
                            "opacity",
                            2000,
                            250,
                            "easeOutQuad",
                            "${mask}",
                            '0.900000',
                            '0'
                        ],
                        [
                            "eid19141",
                            "location",
                            333,
                            500,
                            "easeOutBack",
                            "${puzzle_2}",
                            [[373, 888, 0, 0, 0, 0,0],[373, 721, 0, 0, 0, 0,167]]
                        ],
                        [
                            "eid19193",
                            "location",
                            2000,
                            250,
                            "easeOutQuad",
                            "${puzzle_2}",
                            [[373, 721, 0, 0, 0, 0,0],[373, 1459, 0, 0, 0, 0,738]]
                        ],
                        [
                            "eid19135",
                            "location",
                            333,
                            500,
                            "easeOutBack",
                            "${puzzle_9}",
                            [[375, 888, 0, 0, 0, 0,0],[541, 1059, 0, 0, 0, 0,238.32]]
                        ],
                        [
                            "eid19192",
                            "location",
                            2000,
                            250,
                            "easeOutQuad",
                            "${puzzle_9}",
                            [[541, 1059, 0, 0, 0, 0,0],[541, 1797, 0, 0, 0, 0,738]]
                        ],
                        [
                            "eid19171",
                            "opacity",
                            333,
                            250,
                            "easeOutBack",
                            "${puzzle_4}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "quesPop": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'mask',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '750px', '1206px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'question',
                            rect: ['11px', '699px', '729px', '1014px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/scene1/question.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['88px', '382px', '582px', '86px', 'auto', 'auto'],
                            display: 'none',
                            id: 'q1',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['88px', '480px', '582px', '86px', 'auto', 'auto'],
                            display: 'none',
                            id: 'q2',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['88px', '572px', '582px', '86px', 'auto', 'auto'],
                            display: 'none',
                            id: 'q3',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['88px', '676px', '582px', '86px', 'auto', 'auto'],
                            display: 'none',
                            id: 'q4',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'rect',
                            id: 'wrAn',
                            display: 'none',
                            symbolName: 'wrAn',
                            rect: ['88', '676px', '87', '85', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            type: 'rect',
                            id: 'riAn',
                            symbolName: 'riAn',
                            display: 'none',
                            rect: ['88', '468', '91', '89', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '750px', '1206px', 'auto', 'auto'],
                            display: 'none',
                            id: 'block',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '750px', '1206px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: false,
                    labels: {
                        "in": 250,
                        "out": 2000
                    },
                    data: [
                        [
                            "eid530",
                            "display",
                            750,
                            0,
                            "easeOutQuad",
                            "${q2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid636",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${wrAn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid529",
                            "display",
                            750,
                            0,
                            "easeOutQuad",
                            "${q3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid590",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${block}",
                            'none',
                            'none'
                        ],
                        [
                            "eid528",
                            "display",
                            750,
                            0,
                            "easeOutQuad",
                            "${q4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid484",
                            "-webkit-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${question}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41597",
                            "-moz-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${question}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41598",
                            "-ms-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${question}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41599",
                            "msTransformOrigin",
                            250,
                            0,
                            "easeOutBack",
                            "${question}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41600",
                            "-o-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${question}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41601",
                            "transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${question}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid476",
                            "opacity",
                            250,
                            250,
                            "easeOutQuad",
                            "${mask}",
                            '0',
                            '0.9'
                        ],
                        [
                            "eid477",
                            "opacity",
                            2000,
                            250,
                            "easeOutQuad",
                            "${mask}",
                            '0.900000',
                            '0'
                        ],
                        [
                            "eid488",
                            "scaleY",
                            250,
                            500,
                            "easeOutBack",
                            "${question}",
                            '0',
                            '1'
                        ],
                        [
                            "eid508",
                            "scaleY",
                            2000,
                            250,
                            "easeOutQuad",
                            "${question}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid480",
                            "top",
                            250,
                            500,
                            "easeOutBack",
                            "${question}",
                            '1206px',
                            '96px'
                        ],
                        [
                            "eid509",
                            "top",
                            2000,
                            250,
                            "easeOutQuad",
                            "${question}",
                            '96px',
                            '699px'
                        ],
                        [
                            "eid769",
                            "opacity",
                            2000,
                            250,
                            "easeOutQuad",
                            "${wrAn}",
                            '1',
                            '0'
                        ],
                        [
                            "eid698",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${block}",
                            '0',
                            '0'
                        ],
                        [
                            "eid527",
                            "display",
                            750,
                            0,
                            "easeOutQuad",
                            "${q1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid487",
                            "scaleX",
                            250,
                            500,
                            "easeOutBack",
                            "${question}",
                            '0',
                            '1'
                        ],
                        [
                            "eid507",
                            "scaleX",
                            2000,
                            250,
                            "easeOutQuad",
                            "${question}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid803",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${riAn}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "wrAn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['2', '2']],
                            rect: ['0px', '0px', '87px', '85px', 'auto', 'auto'],
                            display: 'none',
                            id: 'wrongicon',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene1/wrongicon.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '85px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid557",
                            "display",
                            250,
                            0,
                            "easeOutBack",
                            "${wrongicon}",
                            'none',
                            'block'
                        ],
                        [
                            "eid535",
                            "scaleX",
                            250,
                            500,
                            "easeOutBack",
                            "${wrongicon}",
                            '2',
                            '1'
                        ],
                        [
                            "eid536",
                            "scaleY",
                            250,
                            500,
                            "easeOutBack",
                            "${wrongicon}",
                            '2',
                            '1'
                        ]
                    ]
                }
            },
            "riAn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '91px', '89px', 'auto', 'auto'],
                            id: 'righticon',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene1/righticon.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '91px', '89px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid787",
                            "display",
                            250,
                            0,
                            "easeOutBack",
                            "${righticon}",
                            'none',
                            'block'
                        ],
                        [
                            "eid786",
                            "scaleY",
                            250,
                            500,
                            "easeOutBack",
                            "${righticon}",
                            '2',
                            '1'
                        ],
                        [
                            "eid785",
                            "scaleX",
                            250,
                            500,
                            "easeOutBack",
                            "${righticon}",
                            '2',
                            '1'
                        ]
                    ]
                }
            },
            "puzPop": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '750px', '1206px', 'auto', 'auto'],
                            id: 'mask',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0', '0']],
                            symbolName: 'splineAn',
                            display: 'none',
                            opacity: '1',
                            id: 'splineAn',
                            rect: ['-228', '-113', '1206', '1206', 'auto', 'auto']
                        },
                        {
                            rect: ['44px', '114px', '662px', '752px', 'auto', 'auto'],
                            id: 'roundlight',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/roundlight.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'puzzle',
                            rect: ['201px', '316px', '347px', '347px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzle.png', '0px', '0px']
                        },
                        {
                            rect: ['90px', '185px', '570px', '610px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.9', '0.9']],
                            id: 'sparkle',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/sparkle.png', '0px', '0px']
                        },
                        {
                            rect: ['201px', '702px', '347px', '133px', 'auto', 'auto'],
                            id: 'puzzleword',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzleword.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '750px', '1206px']
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: false,
                    labels: {
                        "in": 250
                    },
                    data: [
                        [
                            "eid901",
                            "scaleY",
                            375,
                            500,
                            "easeOutBack",
                            "${puzzle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid927",
                            "scaleY",
                            2391,
                            192,
                            "easeOutQuad",
                            "${puzzle}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid1279",
                            "scaleY",
                            2583,
                            417,
                            "easeOutQuad",
                            "${puzzle}",
                            '1.1',
                            '0.5'
                        ],
                        [
                            "eid881",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${splineAn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid902",
                            "scaleX",
                            375,
                            500,
                            "easeOutBack",
                            "${puzzle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid926",
                            "scaleX",
                            2391,
                            192,
                            "easeOutQuad",
                            "${puzzle}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid1278",
                            "scaleX",
                            2583,
                            417,
                            "easeOutQuad",
                            "${puzzle}",
                            '1.1',
                            '0.5'
                        ],
                        [
                            "eid908",
                            "scaleX",
                            500,
                            500,
                            "easeOutBack",
                            "${puzzleword}",
                            '0',
                            '1'
                        ],
                        [
                            "eid910",
                            "display",
                            500,
                            0,
                            "easeOutQuad",
                            "${puzzleword}",
                            'none',
                            'block'
                        ],
                        [
                            "eid904",
                            "scaleY",
                            250,
                            500,
                            "easeOutQuad",
                            "${sparkle}",
                            '0',
                            '0.9'
                        ],
                        [
                            "eid907",
                            "scaleY",
                            750,
                            1750,
                            "easeOutQuad",
                            "${sparkle}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid900",
                            "display",
                            375,
                            0,
                            "easeOutQuad",
                            "${puzzle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid909",
                            "scaleY",
                            500,
                            500,
                            "easeOutBack",
                            "${puzzleword}",
                            '0',
                            '1'
                        ],
                        [
                            "eid917",
                            "opacity",
                            2250,
                            250,
                            "easeOutBack",
                            "${sparkle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid911",
                            "-webkit-transform-origin",
                            500,
                            0,
                            "easeOutBack",
                            "${puzzleword}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41602",
                            "-moz-transform-origin",
                            500,
                            0,
                            "easeOutBack",
                            "${puzzleword}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41603",
                            "-ms-transform-origin",
                            500,
                            0,
                            "easeOutBack",
                            "${puzzleword}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41604",
                            "msTransformOrigin",
                            500,
                            0,
                            "easeOutBack",
                            "${puzzleword}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41605",
                            "-o-transform-origin",
                            500,
                            0,
                            "easeOutBack",
                            "${puzzleword}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41606",
                            "transform-origin",
                            500,
                            0,
                            "easeOutBack",
                            "${puzzleword}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid883",
                            "scaleY",
                            250,
                            500,
                            "easeOutBack",
                            "${roundlight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid862",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${splineAn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid918",
                            "opacity",
                            2250,
                            250,
                            "easeOutQuad",
                            "${puzzleword}",
                            '1',
                            '0'
                        ],
                        [
                            "eid903",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${sparkle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid882",
                            "scaleX",
                            250,
                            500,
                            "easeOutBack",
                            "${roundlight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid850",
                            "opacity",
                            250,
                            250,
                            "easeOutQuad",
                            "${mask}",
                            '0',
                            '0.9'
                        ],
                        [
                            "eid851",
                            "opacity",
                            2250,
                            250,
                            "easeOutQuad",
                            "${mask}",
                            '0.900000',
                            '0'
                        ],
                        [
                            "eid921",
                            "rotateZ",
                            2391,
                            609,
                            "easeOutQuad",
                            "${puzzle}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid916",
                            "opacity",
                            2250,
                            250,
                            "easeOutQuad",
                            "${splineAn}",
                            '1',
                            '0'
                        ],
                        [
                            "eid919",
                            "opacity",
                            2250,
                            250,
                            "easeOutQuad",
                            "${roundlight}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1342",
                            "top",
                            1750,
                            641,
                            "easeOutQuad",
                            "${puzzle}",
                            '316px',
                            '286px'
                        ],
                        [
                            "eid925",
                            "top",
                            2391,
                            609,
                            "easeOutQuad",
                            "${puzzle}",
                            '286px',
                            '1119px'
                        ],
                        [
                            "eid863",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${splineAn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid884",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${roundlight}",
                            'none',
                            'block'
                        ],
                        [
                            "eid905",
                            "scaleX",
                            250,
                            500,
                            "easeOutQuad",
                            "${sparkle}",
                            '0',
                            '0.9'
                        ],
                        [
                            "eid906",
                            "scaleX",
                            750,
                            1750,
                            "easeOutQuad",
                            "${sparkle}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            },
            "splineAn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'spline',
                            rect: ['0px', '0px', '1206px', '1206px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/spline.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1206px', '1206px']
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: true,
                    data: [
                        [
                            "eid865",
                            "rotateZ",
                            0,
                            20000,
                            "linear",
                            "${spline}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "rulePop": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '750px', '1206px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'mask',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['10px', '130px', '729px', '1014px', 'auto', 'auto'],
                            type: 'image',
                            id: 'rule',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/ui/rule.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], ['-80'], [], ['1.1', '1.1']],
                            display: 'none',
                            rect: ['-408px', '1134px', '347px', '347px', 'auto', 'auto'],
                            id: 'puzzle',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzle.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'rect',
                            display: 'none',
                            symbolName: 'startBtn',
                            rect: ['200', '2162px', '350', '106', 'auto', 'auto'],
                            id: 'startBtn'
                        },
                        {
                            rect: ['0px', '0px', '750px', '1206px', 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'touch',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(0,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '750px', '1206px']
                        }
                    }
                },
                timeline: {
                    duration: 4667,
                    autoPlay: false,
                    labels: {
                        "in": 250,
                        "out": 1250,
                        "first": 2000,
                        "first_out": 3500
                    },
                    data: [
                        [
                            "eid1540",
                            "scaleY",
                            3500,
                            583,
                            "easeOutQuad",
                            "${puzzle}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid1543",
                            "scaleY",
                            4083,
                            583,
                            "easeOutQuad",
                            "${puzzle}",
                            '1.1',
                            '0.5'
                        ],
                        [
                            "eid1367",
                            "top",
                            250,
                            500,
                            "easeOutBack",
                            "${rule}",
                            '1206px',
                            '52px'
                        ],
                        [
                            "eid1369",
                            "top",
                            1250,
                            250,
                            "easeOutQuad",
                            "${rule}",
                            '52px',
                            '1206px'
                        ],
                        [
                            "eid1402",
                            "top",
                            2000,
                            500,
                            "easeOutBack",
                            "${rule}",
                            '1206px',
                            '52px'
                        ],
                        [
                            "eid1525",
                            "top",
                            3500,
                            399,
                            "easeOutQuad",
                            "${rule}",
                            '52px',
                            '130px'
                        ],
                        [
                            "eid1417",
                            "scaleX",
                            2250,
                            500,
                            "easeOutBack",
                            "${startBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1526",
                            "top",
                            3500,
                            250,
                            "easeOutQuad",
                            "${startBtn}",
                            '1008px',
                            '2162px'
                        ],
                        [
                            "eid1394",
                            "opacity",
                            250,
                            0,
                            "easeOutQuad",
                            "${touch}",
                            '0',
                            '0'
                        ],
                        [
                            "eid40121",
                            "left",
                            3500,
                            235,
                            "easeOutBack",
                            "${sogou}",
                            '438px',
                            '514px'
                        ],
                        [
                            "eid40116",
                            "opacity",
                            2124,
                            235,
                            "easeOutBack",
                            "${sogou}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40117",
                            "opacity",
                            3500,
                            235,
                            "easeOutBack",
                            "${sogou}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1397",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${rule}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1398",
                            "display",
                            1750,
                            0,
                            "easeOutQuad",
                            "${rule}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1400",
                            "display",
                            2000,
                            0,
                            "easeOutQuad",
                            "${rule}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1527",
                            "display",
                            3899,
                            0,
                            "easeOutBack",
                            "${rule}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1412",
                            "display",
                            2000,
                            0,
                            "easeOutBack",
                            "${puzzle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2290",
                            "opacity",
                            250,
                            0,
                            "easeOutQuad",
                            "${rule}",
                            '1',
                            '1'
                        ],
                        [
                            "eid40112",
                            "top",
                            2124,
                            500,
                            "easeOutBack",
                            "${sogou}",
                            '219px',
                            '59px'
                        ],
                        [
                            "eid40122",
                            "top",
                            3500,
                            235,
                            "easeOutBack",
                            "${sogou}",
                            '59px',
                            '451px'
                        ],
                        [
                            "eid1418",
                            "scaleY",
                            2250,
                            500,
                            "easeOutBack",
                            "${startBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1408",
                            "left",
                            2000,
                            1000,
                            "easeOutBack",
                            "${puzzle}",
                            '-408px',
                            '-132px'
                        ],
                        [
                            "eid1533",
                            "left",
                            3500,
                            583,
                            "easeOutQuad",
                            "${puzzle}",
                            '-132px',
                            '201px'
                        ],
                        [
                            "eid1536",
                            "left",
                            4083,
                            583,
                            "easeOutQuad",
                            "${puzzle}",
                            '201px',
                            '201px'
                        ],
                        [
                            "eid1396",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${mask}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1399",
                            "display",
                            1750,
                            0,
                            "easeOutQuad",
                            "${mask}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1401",
                            "display",
                            2000,
                            0,
                            "easeOutQuad",
                            "${mask}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1539",
                            "scaleX",
                            3500,
                            583,
                            "easeOutQuad",
                            "${puzzle}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid1542",
                            "scaleX",
                            4083,
                            583,
                            "easeOutQuad",
                            "${puzzle}",
                            '1.1',
                            '0.5'
                        ],
                        [
                            "eid1372",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${touch}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1373",
                            "display",
                            1000,
                            0,
                            "easeOutQuad",
                            "${touch}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1363",
                            "opacity",
                            250,
                            250,
                            "easeOutQuad",
                            "${mask}",
                            '0',
                            '0.9'
                        ],
                        [
                            "eid1364",
                            "opacity",
                            1250,
                            250,
                            "easeOutQuad",
                            "${mask}",
                            '0.900000',
                            '0'
                        ],
                        [
                            "eid1395",
                            "opacity",
                            2000,
                            250,
                            "easeOutQuad",
                            "${mask}",
                            '0',
                            '0.9'
                        ],
                        [
                            "eid1529",
                            "opacity",
                            3500,
                            250,
                            "easeOutQuad",
                            "${mask}",
                            '0.900000',
                            '0'
                        ],
                        [
                            "eid2288",
                            "scaleX",
                            3500,
                            399,
                            "easeOutQuad",
                            "${rule}",
                            '1',
                            '0'
                        ],
                        [
                            "eid40113",
                            "display",
                            2124,
                            0,
                            "easeOutQuad",
                            "${sogou}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40118",
                            "display",
                            3735,
                            0,
                            "easeOutBack",
                            "${sogou}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1411",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${startBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1528",
                            "display",
                            3750,
                            0,
                            "easeOutBack",
                            "${startBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1410",
                            "top",
                            3000,
                            0,
                            "easeOutBack",
                            "${puzzle}",
                            '829px',
                            '829px'
                        ],
                        [
                            "eid1534",
                            "top",
                            3500,
                            583,
                            "easeOutQuad",
                            "${puzzle}",
                            '829px',
                            '676px'
                        ],
                        [
                            "eid1535",
                            "top",
                            4083,
                            583,
                            "easeOutQuad",
                            "${puzzle}",
                            '676px',
                            '1134px'
                        ],
                        [
                            "eid1409",
                            "rotateZ",
                            2000,
                            1000,
                            "easeOutBack",
                            "${puzzle}",
                            '-80deg',
                            '0deg'
                        ],
                        [
                            "eid1541",
                            "rotateZ",
                            3500,
                            1167,
                            "easeOutQuad",
                            "${puzzle}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid2294",
                            "scaleY",
                            3500,
                            399,
                            "easeOutQuad",
                            "${rule}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2285",
                            "left",
                            3500,
                            399,
                            "easeOutQuad",
                            "${rule}",
                            '10px',
                            '375px'
                        ]
                    ]
                }
            },
            "startBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'start',
                            rect: ['0px', '0px', '350px', '106px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/start.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '106px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid1459",
                            "scaleY",
                            0,
                            125,
                            "easeOutQuad",
                            "${start}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1460",
                            "scaleY",
                            125,
                            125,
                            "easeOutQuad",
                            "${start}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1461",
                            "scaleX",
                            0,
                            125,
                            "easeOutQuad",
                            "${start}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1462",
                            "scaleX",
                            125,
                            125,
                            "easeOutQuad",
                            "${start}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            },
            "s2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1206px', '1206px', 'auto', 'auto'],
                            id: 'scene1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/scene2.jpg', '0px', '0px']
                        },
                        {
                            rect: ['903px', '939', '186', '247', 'auto', 'auto'],
                            id: 'shoeAn',
                            symbolName: 'shoeAn',
                            type: 'rect'
                        },
                        {
                            rect: ['241px', '237px', '163px', '66px', 'auto', 'auto'],
                            id: 'pot',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/pot.png', '0px', '0px']
                        },
                        {
                            rect: ['252px', '148px', null, null, 'auto', 'auto'],
                            id: 'peashooter',
                            symbolName: 'peashooter',
                            type: 'rect'
                        },
                        {
                            rect: ['894px', '180px', '90px', '112px', 'auto', 'auto'],
                            id: 'zombie',
                            symbolName: 'zombie',
                            type: 'rect'
                        },
                        {
                            rect: ['904px', '140px', '297px', '157px', 'auto', 'auto'],
                            id: 'model',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/model.png', '0px', '0px']
                        },
                        {
                            rect: ['856px', '288px', '316px', '33px', 'auto', 'auto'],
                            id: 'modelbox',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/modelbox.png', '0px', '0px']
                        },
                        {
                            rect: ['739', '582', '50', '50', 'auto', 'auto'],
                            id: 'puzzle4',
                            symbolName: 'puzzle4',
                            type: 'rect'
                        },
                        {
                            rect: ['710px', '474', '107', '314', 'auto', 'auto'],
                            id: 'clzAn6',
                            symbolName: 'clzAn6',
                            type: 'rect'
                        },
                        {
                            rect: ['662px', '474', '50', '73', 'auto', 'auto'],
                            id: 'clzAn5',
                            symbolName: 'clzAn5',
                            type: 'rect'
                        },
                        {
                            rect: ['579px', '472', '122', '319', 'auto', 'auto'],
                            id: 'clzAn4',
                            symbolName: 'clzAn4',
                            type: 'rect'
                        },
                        {
                            rect: ['515px', '478', '99', '254', 'auto', 'auto'],
                            id: 'clzAn3',
                            symbolName: 'clzAn3',
                            type: 'rect'
                        },
                        {
                            rect: ['445px', '478', '99', '254', 'auto', 'auto'],
                            id: 'clzAn2',
                            symbolName: 'clzAn2',
                            type: 'rect'
                        },
                        {
                            rect: ['388px', '478', '99', '254', 'auto', 'auto'],
                            id: 'clzAn1',
                            symbolName: 'clzAn1',
                            type: 'rect'
                        },
                        {
                            rect: ['914', '703', '123', '112', 'auto', 'auto'],
                            id: 'valveAn',
                            symbolName: 'valveAn',
                            type: 'rect'
                        },
                        {
                            rect: ['893', '595', '187', '255', 'auto', 'auto'],
                            id: 'safeopen',
                            symbolName: 'safeopen',
                            type: 'rect'
                        },
                        {
                            rect: ['873px', '626px', '202px', '208px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'safeTouch',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['0', '411', '378', '604', 'auto', 'auto'],
                            id: 'bWiper',
                            symbolName: 'bWiper',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1206px', '1206px']
                        }
                    }
                },
                timeline: {
                    duration: 6500,
                    autoPlay: false,
                    data: [
                        [
                            "eid10258",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${puzzle4}",
                            '739px',
                            '283px'
                        ],
                        [
                            "eid10163",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${clzAn3}",
                            '515px',
                            '59px'
                        ],
                        [
                            "eid27",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${scene1}",
                            '0px',
                            '-456px'
                        ],
                        [
                            "eid11393",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${safeopen}",
                            '893px',
                            '437px'
                        ],
                        [
                            "eid10161",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${clzAn5}",
                            '662px',
                            '206px'
                        ],
                        [
                            "eid11122",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${safeTouch}",
                            '873px',
                            '417px'
                        ],
                        [
                            "eid12370",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${model}",
                            '904px',
                            '448px'
                        ],
                        [
                            "eid12367",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${pot}",
                            '241px',
                            '-215px'
                        ],
                        [
                            "eid10503",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${bWiper}",
                            '0px',
                            '-456px'
                        ],
                        [
                            "eid9935",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${shoeAn}",
                            '903px',
                            '447px'
                        ],
                        [
                            "eid12368",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${peashooter}",
                            '252px',
                            '-204px'
                        ],
                        [
                            "eid12283",
                            "top",
                            0,
                            0,
                            "linear",
                            "${peashooter}",
                            '148px',
                            '148px'
                        ],
                        [
                            "eid11056",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${valveAn}",
                            '914px',
                            '458px'
                        ],
                        [
                            "eid10160",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${clzAn6}",
                            '710px',
                            '254px'
                        ],
                        [
                            "eid10164",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${clzAn2}",
                            '445px',
                            '-11px'
                        ],
                        [
                            "eid10162",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${clzAn4}",
                            '579px',
                            '123px'
                        ],
                        [
                            "eid10165",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${clzAn1}",
                            '388px',
                            '-68px'
                        ],
                        [
                            "eid12369",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${zombie}",
                            '894px',
                            '438px'
                        ],
                        [
                            "eid12371",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${modelbox}",
                            '856px',
                            '400px'
                        ]
                    ]
                }
            },
            "musicBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '69px', 'auto', 'auto'],
                            id: 'music',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/ui/music.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '70px', '69px', 'auto', 'auto'],
                            id: 'musicoff',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/ui/musicoff.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '69px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "on": 250,
                        "off": 500
                    },
                    data: [
                        [
                            "eid2842",
                            "display",
                            0,
                            0,
                            "linear",
                            "${music}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2845",
                            "display",
                            500,
                            0,
                            "linear",
                            "${music}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2843",
                            "display",
                            0,
                            0,
                            "linear",
                            "${musicoff}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2844",
                            "display",
                            500,
                            0,
                            "linear",
                            "${musicoff}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "puzzlesPreload": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '347px', '347px', 'auto', 'auto'],
                            id: 'puzzle_1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_1.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '347px', '347px', 'auto', 'auto'],
                            id: 'puzzle_2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '347px', '347px', 'auto', 'auto'],
                            id: 'puzzle_3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_3.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '347px', '347px', 'auto', 'auto'],
                            id: 'puzzle_4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_4.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '347px', '347px', 'auto', 'auto'],
                            id: 'puzzle_5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_5.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '347px', '347px', 'auto', 'auto'],
                            id: 'puzzle_6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_6.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '347px', '347px', 'auto', 'auto'],
                            id: 'puzzle_7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_7.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '347px', '347px', 'auto', 'auto'],
                            id: 'puzzle_8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_8.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '347px', '347px', 'auto', 'auto'],
                            id: 'puzzle_9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_9.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '164px', '305px', 'auto', 'auto'],
                            id: 'butter',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/butter.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '99px', '254px', 'auto', 'auto'],
                            id: 'cloz_1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/cloz_1.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '99px', '254px', 'auto', 'auto'],
                            id: 'cloz_2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/cloz_2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '99px', '254px', 'auto', 'auto'],
                            id: 'cloz_3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/cloz_3.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '122px', '319px', 'auto', 'auto'],
                            id: 'cloz_4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/cloz_4.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '50px', '73px', 'auto', 'auto'],
                            id: 'cloz_5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/cloz_5.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '107px', '314px', 'auto', 'auto'],
                            id: 'cloz_6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/cloz_6.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '297px', '157px', 'auto', 'auto'],
                            id: 'model',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/model.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '316px', '33px', 'auto', 'auto'],
                            id: 'modelbox',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/modelbox.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '26px', '26px', 'auto', 'auto'],
                            id: 'pea',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/pea.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '163px', '66px', 'auto', 'auto'],
                            id: 'pot',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/pot.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '750px', '1206px', 'auto', 'auto'],
                            id: 'safe',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/safe.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '187px', '255px', 'auto', 'auto'],
                            id: 'safe_open',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/safe_open.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '1206px', '1206px', 'auto', 'auto'],
                            id: 'scene2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/scene2.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '186px', '247px', 'auto', 'auto'],
                            id: 'shoe',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/shoe.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '123px', '112px', 'auto', 'auto'],
                            id: 'valve',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/valve.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '170px', '168px', 'auto', 'auto'],
                            id: 'yes',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/yes.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '65px', '66px', 'auto', 'auto'],
                            id: 'key',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/key.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '232px', '291px', 'auto', 'auto'],
                            id: 'lamp_off',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/lamp_off.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '251px', '331px', 'auto', 'auto'],
                            id: 'lamp_on',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/lamp_on.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '232px', '276px', 'auto', 'auto'],
                            id: 'lamp_shadow',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/lamp_shadow.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '25px', '92px', 'auto', 'auto'],
                            id: 'lamp_switch',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/lamp_switch.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '659px', '295px', 'auto', 'auto'],
                            id: 'open',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/open.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '294px', '339px', 'auto', 'auto'],
                            id: 'photo1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/photo1.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '271px', '254px', 'auto', 'auto'],
                            id: 'photo2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/photo2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '164px', '204px', 'auto', 'auto'],
                            id: 'photo3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/photo3.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '137px', '138px', 'auto', 'auto'],
                            id: 'photo4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/photo4.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '121px', '140px', 'auto', 'auto'],
                            id: 'photo5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/photo5.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '183px', '237px', 'auto', 'auto'],
                            id: 'photo6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/photo6.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '296px', '109px', 'auto', 'auto'],
                            id: 'photo7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/photo7.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '220px', '266px', 'auto', 'auto'],
                            id: 'photo8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/photo8.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '1206px', '1206px', 'auto', 'auto'],
                            id: 'scene3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/scene3.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '139px', '77px', 'auto', 'auto'],
                            id: 'camera',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/camera.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '618px', '260px', 'auto', 'auto'],
                            id: 'desk_open',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/desk_open.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '9px', '10px', 'auto', 'auto'],
                            id: 'eyeball1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/eyeball1.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '7px', '7px', 'auto', 'auto'],
                            id: 'eyeball2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/eyeball2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '377px', '674px', 'auto', 'auto'],
                            id: 'fridge_open',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/fridge_open.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '157px', '88px', 'auto', 'auto'],
                            id: 'mug',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/mug.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '42px', '37px', 'auto', 'auto'],
                            id: 'peashooter_cap',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/peashooter_cap.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '319px', '390px', 'auto', 'auto'],
                            id: 'photo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/photo.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '323px', '166px', 'auto', 'auto'],
                            id: 'pot2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/pot.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '26px', '161px', 'auto', 'auto'],
                            id: 'rope',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/rope.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '1206px', '1206px', 'auto', 'auto'],
                            id: 'scene4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/scene4.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '115px', '192px', 'auto', 'auto'],
                            id: 'zombie',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/zombie.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '327px', '301px', 'auto', 'auto'],
                            id: 'bigbox',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene5/bigbox.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '141px', '173px', 'auto', 'auto'],
                            id: 'cap',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene5/cap.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '953px', '731px', 'auto', 'auto'],
                            id: 'door',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene5/door.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '507px', '616px', 'auto', 'auto'],
                            id: 'mummy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene5/mummy.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '129px', '102px', 'auto', 'auto'],
                            id: 'paper',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene5/paper.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '215px', '153px', 'auto', 'auto'],
                            id: 'paper_shadow',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene5/paper_shadow.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '167px', '205px', 'auto', 'auto'],
                            id: 'pizzabox',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene5/pizzabox.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '240px', '277px', 'auto', 'auto'],
                            id: 'pizzabox_shadow',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene5/pizzabox_shadow.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '208px', '286px', 'auto', 'auto'],
                            id: 'roadblock',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene5/roadblock.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '1206px', '1206px', 'auto', 'auto'],
                            id: 'scene5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene5/scene5.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '58px', '16px', 'auto', 'auto'],
                            id: 'arrow',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/arrow.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '748px', '878px', 'auto', 'auto'],
                            id: 'box2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/box.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '95px', '85px', 'auto', 'auto'],
                            id: 'leftArrow',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/leftArrow.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '170px', '168px', 'auto', 'auto'],
                            id: 'music',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/music.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '170px', '168px', 'auto', 'auto'],
                            id: 'musicoff',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/musicoff.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '157px', '45px', 'auto', 'auto'],
                            id: 'next',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/next.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '158px', '45px', 'auto', 'auto'],
                            id: 'prev',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/prev.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '347px', '347px', 'auto', 'auto'],
                            id: 'puzzle',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzle.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '248px', '105px', 'auto', 'auto'],
                            id: 'puzzleremain',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzleremain.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '347px', '133px', 'auto', 'auto'],
                            id: 'puzzleword',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzleword.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '95px', '85px', 'auto', 'auto'],
                            id: 'rightArrow',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/rightArrow.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '193px', '61px', 'auto', 'auto'],
                            id: 'roomname_ck',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/roomname_ck.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '193px', '61px', 'auto', 'auto'],
                            id: 'roomname_kt',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/roomname_kt.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '193px', '61px', 'auto', 'auto'],
                            id: 'roomname_lt',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/roomname_lt.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '193px', '61px', 'auto', 'auto'],
                            id: 'roomname_w1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/roomname_w1.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '193px', '61px', 'auto', 'auto'],
                            id: 'roomname_w2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/roomname_w2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '662px', '752px', 'auto', 'auto'],
                            id: 'roundlight',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/roundlight.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '729px', '1014px', 'auto', 'auto'],
                            id: 'rule',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/rule.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '442px', '123px', 'auto', 'auto'],
                            id: 'sogou',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/sogou.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '570px', '610px', 'auto', 'auto'],
                            id: 'sparkle',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/sparkle.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '1206px', '1206px', 'auto', 'auto'],
                            id: 'spline',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/spline.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '350px', '106px', 'auto', 'auto'],
                            id: 'start',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/start.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '248px', '105px', 'auto', 'auto'],
                            id: 'timeremain',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/timeremain.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '350px', '106px', 'auto', 'auto'],
                            id: 'again',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/again.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '322px', '417px', 'auto', 'auto'],
                            id: 'ballon',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/ballon.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '750px', '514px', 'auto', 'auto'],
                            id: 'Banner',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/Banner.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '750px', '667px', 'auto', 'auto'],
                            id: 'bigbanner',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/bigbanner.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '750px', '1206px', 'auto', 'auto'],
                            id: 'end',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/end.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '750px', '1206px', 'auto', 'auto'],
                            id: 'fg',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/fg.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '750px', '461px', 'auto', 'auto'],
                            id: 'fg2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/fg2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '400px', '125px', 'auto', 'auto'],
                            id: 'gift',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/gift.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '242px', '299px', 'auto', 'auto'],
                            id: 'jetpackZombie',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/jetpackZombie.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '424px', '584px', 'auto', 'auto'],
                            id: 'keyZombie',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/keyZombie.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '397px', '136px', 'auto', 'auto'],
                            id: 'lock',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/lock.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '522px', '192px', 'auto', 'auto'],
                            id: 'logo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/logo.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '729px', '1014px', 'auto', 'auto'],
                            id: 'lose',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/lose.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '730px', '861px', 'auto', 'auto'],
                            id: 'pop',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/pop.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '286px', '50px', 'auto', 'auto'],
                            id: 'result',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/result.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '592px', '263px', 'auto', 'auto'],
                            id: 'roundPanel',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/roundPanel.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '275px', '85px', 'auto', 'auto'],
                            id: 'share',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/share.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '668px', '192px', 'auto', 'auto'],
                            id: 'SURPRISE',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/SURPRISE.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '632px', '190px', 'auto', 'auto'],
                            id: 'SURPRISE_shadow',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/SURPRISE_shadow.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '330px', '105px', 'auto', 'auto'],
                            id: 'time',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/time.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '750px', '1206px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "safePop": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '750px', '1206px', 'auto', 'auto'],
                            id: 'mask',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['0', '0', '750px', '1206px', 'auto', 'auto'],
                            type: 'image',
                            id: 'safe',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/safe.jpg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [100, 'px'], 'rgba(0,0,0,1)', '900', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">0</p>',
                            id: 'num1',
                            opacity: '1',
                            textShadow: ['rgba(255,255,255,0.65)', 5, 5, 0],
                            rect: ['81px', '387px', '88px', '124px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], ['5'], [1, 1, 1]],
                            id: 'num2',
                            text: '<p style=\"margin: 0px;\">​0</p>',
                            rect: ['249px', '381px', '88px', '124px', 'auto', 'auto'],
                            opacity: '1',
                            font: ['Arial, Helvetica, sans-serif', [100, 'px'], 'rgba(0,0,0,1)', '900', 'none', '', 'break-word', 'normal'],
                            textShadow: ['rgba(255,255,255,0.65)', 5, 5, 0],
                            type: 'text'
                        },
                        {
                            transform: [[], [], ['-2'], [1, 1, 1]],
                            id: 'num3',
                            text: '<p style=\"margin: 0px;\">​0</p>',
                            rect: ['434px', '377px', '88px', '124px', 'auto', 'auto'],
                            opacity: '1',
                            font: ['Arial, Helvetica, sans-serif', [100, 'px'], 'rgba(0,0,0,1)', '900', 'none', '', 'break-word', 'normal'],
                            textShadow: ['rgba(255,255,255,0.65)', 5, 5, 0],
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [100, 'px'], 'rgba(0,0,0,1)', '900', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​0</p>',
                            id: 'num4',
                            opacity: '1',
                            textShadow: ['rgba(255,255,255,0.65)', 5, 5, 0],
                            rect: ['612px', '371px', '88px', '124px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'yesBtn',
                            symbolName: 'yesBtn',
                            rect: ['290', '636px', '170', '168', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '750px', '1206px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    labels: {
                        "in": 250,
                        "out": 1250
                    },
                    data: [
                        [
                            "eid8386",
                            "textShadow.color",
                            500,
                            0,
                            "easeOutQuad",
                            "${num1}",
                            'rgba(255,255,255,0.65)',
                            'rgba(255,255,255,0.65)'
                        ],
                        [
                            "eid8381",
                            "opacity",
                            250,
                            250,
                            "easeOutQuad",
                            "${yesBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8382",
                            "opacity",
                            1250,
                            250,
                            "easeOutQuad",
                            "${yesBtn}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8211",
                            "opacity",
                            250,
                            250,
                            "easeOutQuad",
                            "${num2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8223",
                            "opacity",
                            1250,
                            250,
                            "easeOutQuad",
                            "${num2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8212",
                            "opacity",
                            250,
                            250,
                            "easeOutQuad",
                            "${num3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8219",
                            "opacity",
                            1250,
                            250,
                            "easeOutQuad",
                            "${num3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8385",
                            "textShadow.blur",
                            500,
                            0,
                            "easeOutQuad",
                            "${num1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid8393",
                            "textShadow.offsetH",
                            500,
                            0,
                            "easeOutQuad",
                            "${num3}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid8400",
                            "textShadow.color",
                            500,
                            0,
                            "easeOutQuad",
                            "${num4}",
                            'rgba(255,255,255,0.65)',
                            'rgba(255,255,255,0.65)'
                        ],
                        [
                            "eid8210",
                            "opacity",
                            250,
                            250,
                            "easeOutQuad",
                            "${num1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8221",
                            "opacity",
                            1250,
                            250,
                            "easeOutQuad",
                            "${num1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8398",
                            "textShadow.offsetV",
                            500,
                            0,
                            "easeOutQuad",
                            "${num4}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid8394",
                            "textShadow.offsetV",
                            500,
                            0,
                            "easeOutQuad",
                            "${num3}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid8209",
                            "display",
                            250,
                            0,
                            "linear",
                            "${num4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid8388",
                            "textShadow.offsetV",
                            500,
                            0,
                            "easeOutQuad",
                            "${num1}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid8208",
                            "display",
                            250,
                            0,
                            "linear",
                            "${num3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid8396",
                            "textShadow.color",
                            500,
                            0,
                            "easeOutQuad",
                            "${num3}",
                            'rgba(255,255,255,0.65)',
                            'rgba(255,255,255,0.65)'
                        ],
                        [
                            "eid8380",
                            "display",
                            250,
                            0,
                            "linear",
                            "${yesBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid8169",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${mask}",
                            'none',
                            'block'
                        ],
                        [
                            "eid8206",
                            "display",
                            250,
                            0,
                            "linear",
                            "${num1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid8392",
                            "textShadow.blur",
                            500,
                            0,
                            "easeOutQuad",
                            "${num2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid8399",
                            "textShadow.blur",
                            500,
                            0,
                            "easeOutQuad",
                            "${num4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid8390",
                            "textShadow.offsetV",
                            500,
                            0,
                            "easeOutQuad",
                            "${num2}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid8204",
                            "opacity",
                            250,
                            250,
                            "easeOutQuad",
                            "${safe}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8220",
                            "opacity",
                            1250,
                            250,
                            "easeOutQuad",
                            "${safe}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8391",
                            "textShadow.color",
                            500,
                            0,
                            "easeOutQuad",
                            "${num2}",
                            'rgba(255,255,255,0.65)',
                            'rgba(255,255,255,0.65)'
                        ],
                        [
                            "eid8384",
                            "top",
                            250,
                            250,
                            "easeOutQuad",
                            "${yesBtn}",
                            '636px',
                            '616px'
                        ],
                        [
                            "eid8170",
                            "opacity",
                            250,
                            250,
                            "easeOutQuad",
                            "${mask}",
                            '0',
                            '0.9'
                        ],
                        [
                            "eid8171",
                            "opacity",
                            1250,
                            250,
                            "easeOutQuad",
                            "${mask}",
                            '0.900000',
                            '0'
                        ],
                        [
                            "eid8397",
                            "textShadow.offsetH",
                            500,
                            0,
                            "easeOutQuad",
                            "${num4}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid8205",
                            "display",
                            250,
                            0,
                            "linear",
                            "${safe}",
                            'none',
                            'block'
                        ],
                        [
                            "eid8213",
                            "opacity",
                            250,
                            250,
                            "easeOutQuad",
                            "${num4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8222",
                            "opacity",
                            1250,
                            250,
                            "easeOutQuad",
                            "${num4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8207",
                            "display",
                            250,
                            0,
                            "linear",
                            "${num2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid8387",
                            "textShadow.offsetH",
                            500,
                            0,
                            "easeOutQuad",
                            "${num1}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid8395",
                            "textShadow.blur",
                            500,
                            0,
                            "easeOutQuad",
                            "${num3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid8389",
                            "textShadow.offsetH",
                            500,
                            0,
                            "easeOutQuad",
                            "${num2}",
                            '5px',
                            '5px'
                        ]
                    ]
                }
            },
            "yesBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'yes',
                            rect: ['0px', '0px', '170px', '168px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene2/yes.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '170px', '168px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid8316",
                            "scaleX",
                            0,
                            125,
                            "linear",
                            "${yes}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid8318",
                            "scaleX",
                            125,
                            125,
                            "linear",
                            "${yes}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid8317",
                            "scaleY",
                            0,
                            125,
                            "linear",
                            "${yes}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid8319",
                            "scaleY",
                            125,
                            125,
                            "linear",
                            "${yes}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            },
            "shoeAn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '186px', '247px', 'auto', 'auto'],
                            id: 'shoe',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/shoe.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '-152px', '186px', '399px', 'auto', 'auto'],
                            display: 'none',
                            id: 'block',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '186px', '247px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid9212",
                            "top",
                            250,
                            500,
                            "easeOutBack",
                            "${shoe}",
                            '0px',
                            '-152px'
                        ],
                        [
                            "eid9213",
                            "top",
                            1250,
                            250,
                            "easeOutBack",
                            "${shoe}",
                            '-152px',
                            '0px'
                        ],
                        [
                            "eid9966",
                            "display",
                            250,
                            0,
                            "linear",
                            "${block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9967",
                            "display",
                            1444,
                            0,
                            "linear",
                            "${block}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "clzAn1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cloz_1',
                            opacity: '1',
                            rect: ['0px', '0px', '99px', '254px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene2/cloz_1.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '-10px', '99px', '264px', 'auto', 'auto'],
                            display: 'none',
                            id: 'block',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '99px', '254px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid9282",
                            "opacity",
                            250,
                            500,
                            "easeOutQuad",
                            "${cloz_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10028",
                            "display",
                            250,
                            0,
                            "linear",
                            "${block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9280",
                            "top",
                            250,
                            500,
                            "easeOutQuad",
                            "${cloz_1}",
                            '0px',
                            '-10px'
                        ]
                    ]
                }
            },
            "clzAn2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '99px', '254px', 'auto', 'auto'],
                            id: 'cloz_2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/cloz_2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '-10px', '99px', '264px', 'auto', 'auto'],
                            display: 'none',
                            id: 'block',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '99px', '254px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid9346",
                            "opacity",
                            250,
                            500,
                            "easeOutQuad",
                            "${cloz_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid9345",
                            "top",
                            250,
                            500,
                            "easeOutQuad",
                            "${cloz_2}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid10029",
                            "display",
                            250,
                            0,
                            "linear",
                            "${block}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "clzAn3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '99px', '254px', 'auto', 'auto'],
                            id: 'cloz_3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/cloz_3.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '-10px', '99px', '264px', 'auto', 'auto'],
                            display: 'none',
                            id: 'block',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '99px', '254px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid9348",
                            "opacity",
                            250,
                            500,
                            "easeOutQuad",
                            "${cloz_3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10060",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9347",
                            "top",
                            250,
                            500,
                            "easeOutQuad",
                            "${cloz_3}",
                            '0px',
                            '-10px'
                        ]
                    ]
                }
            },
            "clzAn4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '122px', '319px', 'auto', 'auto'],
                            id: 'cloz_4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/cloz_4.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '-10px', '122px', '329px', 'auto', 'auto'],
                            display: 'none',
                            id: 'block',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '122px', '319px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid9380",
                            "opacity",
                            250,
                            500,
                            "easeOutQuad",
                            "${cloz_4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10061",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9379",
                            "top",
                            250,
                            500,
                            "easeOutQuad",
                            "${cloz_4}",
                            '0px',
                            '-10px'
                        ]
                    ]
                }
            },
            "clzAn5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '50px', '73px', 'auto', 'auto'],
                            id: 'cloz_5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/cloz_5.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '-10px', '50px', '83px', 'auto', 'auto'],
                            display: 'none',
                            id: 'block',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '73px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid9381",
                            "top",
                            250,
                            500,
                            "easeOutQuad",
                            "${cloz_5}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid10092",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9382",
                            "opacity",
                            250,
                            500,
                            "easeOutQuad",
                            "${cloz_5}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "clzAn6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '107px', '314px', 'auto', 'auto'],
                            id: 'cloz_6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/cloz_6.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '-10px', '107px', '324px', 'auto', 'auto'],
                            display: 'none',
                            id: 'block',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '107px', '314px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid9383",
                            "top",
                            250,
                            500,
                            "easeOutQuad",
                            "${cloz_6}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid10123",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9384",
                            "opacity",
                            250,
                            500,
                            "easeOutQuad",
                            "${cloz_6}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "puzzle4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                            id: 'puzzle_4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid10197",
                            "top",
                            250,
                            1000,
                            "easeOutBounce",
                            "${puzzle_4}",
                            '0px',
                            '198px'
                        ]
                    ]
                }
            },
            "bWiper": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['360'], [], ['1.05', '1.05']],
                            rect: ['125px', '81px', '164px', '305px', 'auto', 'auto'],
                            id: 'butter',
                            opacity: '0.5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/butter.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '378px', '604px', 'auto', 'auto'],
                            display: 'none',
                            id: 'block',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '378px', '604px']
                        }
                    }
                },
                timeline: {
                    duration: 2246,
                    autoPlay: true,
                    data: [
                        [
                            "eid10577",
                            "scaleX",
                            0,
                            0,
                            "easeInOutBack",
                            "${butter}",
                            '1',
                            '1'
                        ],
                        [
                            "eid10582",
                            "scaleX",
                            1746,
                            500,
                            "easeOutQuad",
                            "${butter}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid10579",
                            "scaleY",
                            0,
                            0,
                            "easeInOutBack",
                            "${butter}",
                            '1',
                            '1'
                        ],
                        [
                            "eid10583",
                            "scaleY",
                            1746,
                            500,
                            "easeOutQuad",
                            "${butter}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid10565",
                            "top",
                            246,
                            82,
                            "easeInOutBack",
                            "${butter}",
                            '107px',
                            '110px'
                        ],
                        [
                            "eid10566",
                            "top",
                            328,
                            82,
                            "easeInOutBack",
                            "${butter}",
                            '110px',
                            '106px'
                        ],
                        [
                            "eid10567",
                            "top",
                            410,
                            82,
                            "easeInOutBack",
                            "${butter}",
                            '106px',
                            '109px'
                        ],
                        [
                            "eid10568",
                            "top",
                            492,
                            82,
                            "easeInOutBack",
                            "${butter}",
                            '109px',
                            '106px'
                        ],
                        [
                            "eid10569",
                            "top",
                            574,
                            82,
                            "easeInOutBack",
                            "${butter}",
                            '106px',
                            '110px'
                        ],
                        [
                            "eid10570",
                            "top",
                            656,
                            117,
                            "easeInOutBack",
                            "${butter}",
                            '110px',
                            '104px'
                        ],
                        [
                            "eid10571",
                            "top",
                            773,
                            36,
                            "easeInBack",
                            "${butter}",
                            '104px',
                            '107px'
                        ],
                        [
                            "eid10840",
                            "top",
                            809,
                            82,
                            "easeInOutBack",
                            "${butter}",
                            '107px',
                            '110px'
                        ],
                        [
                            "eid10841",
                            "top",
                            891,
                            82,
                            "easeInOutBack",
                            "${butter}",
                            '110px',
                            '106px'
                        ],
                        [
                            "eid10842",
                            "top",
                            973,
                            82,
                            "easeInOutBack",
                            "${butter}",
                            '106px',
                            '109px'
                        ],
                        [
                            "eid10843",
                            "top",
                            1055,
                            82,
                            "easeInOutBack",
                            "${butter}",
                            '109px',
                            '106px'
                        ],
                        [
                            "eid10844",
                            "top",
                            1137,
                            82,
                            "easeInOutBack",
                            "${butter}",
                            '106px',
                            '110px'
                        ],
                        [
                            "eid10845",
                            "top",
                            1219,
                            117,
                            "easeInOutBack",
                            "${butter}",
                            '110px',
                            '104px'
                        ],
                        [
                            "eid10846",
                            "top",
                            1336,
                            36,
                            "easeInBack",
                            "${butter}",
                            '104px',
                            '107px'
                        ],
                        [
                            "eid10853",
                            "top",
                            1372,
                            82,
                            "easeInOutBack",
                            "${butter}",
                            '107px',
                            '110px'
                        ],
                        [
                            "eid10854",
                            "top",
                            1454,
                            82,
                            "easeInOutBack",
                            "${butter}",
                            '110px',
                            '106px'
                        ],
                        [
                            "eid10855",
                            "top",
                            1536,
                            82,
                            "easeInOutBack",
                            "${butter}",
                            '106px',
                            '109px'
                        ],
                        [
                            "eid10856",
                            "top",
                            1618,
                            82,
                            "easeInOutBack",
                            "${butter}",
                            '109px',
                            '106px'
                        ],
                        [
                            "eid10857",
                            "top",
                            1700,
                            82,
                            "easeInOutBack",
                            "${butter}",
                            '106px',
                            '110px'
                        ],
                        [
                            "eid10858",
                            "top",
                            1782,
                            117,
                            "easeInOutBack",
                            "${butter}",
                            '110px',
                            '104px'
                        ],
                        [
                            "eid10859",
                            "top",
                            1899,
                            36,
                            "easeInBack",
                            "${butter}",
                            '104px',
                            '107px'
                        ],
                        [
                            "eid10920",
                            "display",
                            1313,
                            0,
                            "easeInOutBack",
                            "${block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10557",
                            "left",
                            246,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '125px',
                            '128px'
                        ],
                        [
                            "eid10558",
                            "left",
                            340,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '128px',
                            '124px'
                        ],
                        [
                            "eid10559",
                            "left",
                            434,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '124px',
                            '126px'
                        ],
                        [
                            "eid10560",
                            "left",
                            527,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '126px',
                            '122px'
                        ],
                        [
                            "eid10561",
                            "left",
                            621,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '122px',
                            '127px'
                        ],
                        [
                            "eid10562",
                            "left",
                            715,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '127px',
                            '125px'
                        ],
                        [
                            "eid10834",
                            "left",
                            809,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '125px',
                            '128px'
                        ],
                        [
                            "eid10835",
                            "left",
                            903,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '128px',
                            '120px'
                        ],
                        [
                            "eid10836",
                            "left",
                            997,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '120px',
                            '126px'
                        ],
                        [
                            "eid10837",
                            "left",
                            1090,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '126px',
                            '122px'
                        ],
                        [
                            "eid10838",
                            "left",
                            1184,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '122px',
                            '127px'
                        ],
                        [
                            "eid10839",
                            "left",
                            1278,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '127px',
                            '125px'
                        ],
                        [
                            "eid10847",
                            "left",
                            1372,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '125px',
                            '128px'
                        ],
                        [
                            "eid10848",
                            "left",
                            1466,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '128px',
                            '120px'
                        ],
                        [
                            "eid10849",
                            "left",
                            1560,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '120px',
                            '126px'
                        ],
                        [
                            "eid10850",
                            "left",
                            1653,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '126px',
                            '122px'
                        ],
                        [
                            "eid10851",
                            "left",
                            1747,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '122px',
                            '127px'
                        ],
                        [
                            "eid10852",
                            "left",
                            1841,
                            94,
                            "easeInOutBack",
                            "${butter}",
                            '127px',
                            '125px'
                        ],
                        [
                            "eid10655",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${butter}",
                            '1',
                            '1'
                        ],
                        [
                            "eid10659",
                            "opacity",
                            738,
                            0,
                            "easeInQuad",
                            "${butter}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid10664",
                            "opacity",
                            1246,
                            0,
                            "easeInQuad",
                            "${butter}",
                            '0.8',
                            '0.35'
                        ],
                        [
                            "eid10592",
                            "opacity",
                            1746,
                            500,
                            "easeInQuad",
                            "${butter}",
                            '0.35',
                            '0'
                        ]
                    ]
                }
            },
            "valveAn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-2px', '-7px', '123px', '112px', 'auto', 'auto'],
                            id: 'valve',
                            transform: [[], ['360'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/valve.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '123px', '112px']
                        }
                    }
                },
                timeline: {
                    duration: 3250,
                    autoPlay: false,
                    labels: {
                        "open": 500,
                        "fail": 2500
                    },
                    data: [
                        [
                            "eid11045",
                            "left",
                            500,
                            250,
                            "easeInQuad",
                            "${valve}",
                            '0px',
                            '-3px'
                        ],
                        [
                            "eid11047",
                            "left",
                            750,
                            250,
                            "easeInQuad",
                            "${valve}",
                            '-3px',
                            '-2px'
                        ],
                        [
                            "eid11049",
                            "left",
                            1000,
                            250,
                            "easeInQuad",
                            "${valve}",
                            '-2px',
                            '0px'
                        ],
                        [
                            "eid11050",
                            "left",
                            1250,
                            250,
                            "easeInQuad",
                            "${valve}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid11052",
                            "left",
                            1500,
                            250,
                            "easeInQuad",
                            "${valve}",
                            '3px',
                            '2px'
                        ],
                        [
                            "eid11055",
                            "left",
                            1750,
                            250,
                            "easeInQuad",
                            "${valve}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid11424",
                            "left",
                            2500,
                            0,
                            "linear",
                            "${valve}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid11046",
                            "top",
                            500,
                            250,
                            "easeInQuad",
                            "${valve}",
                            '0px',
                            '-3px'
                        ],
                        [
                            "eid11048",
                            "top",
                            750,
                            250,
                            "easeInQuad",
                            "${valve}",
                            '-3px',
                            '-7px'
                        ],
                        [
                            "eid11051",
                            "top",
                            1000,
                            500,
                            "easeInQuad",
                            "${valve}",
                            '-7px',
                            '-6px'
                        ],
                        [
                            "eid11053",
                            "top",
                            1500,
                            250,
                            "easeInQuad",
                            "${valve}",
                            '-6px',
                            '-2px'
                        ],
                        [
                            "eid11054",
                            "top",
                            1750,
                            250,
                            "easeInQuad",
                            "${valve}",
                            '-2px',
                            '0px'
                        ],
                        [
                            "eid11425",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${valve}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid11044",
                            "rotateZ",
                            500,
                            1500,
                            "easeInQuad",
                            "${valve}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid11427",
                            "rotateZ",
                            2500,
                            500,
                            "easeOutBack",
                            "${valve}",
                            '360deg',
                            '390deg'
                        ],
                        [
                            "eid11428",
                            "rotateZ",
                            3000,
                            250,
                            "easeOutBack",
                            "${valve}",
                            '390deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "safeopen": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['0px', '0px', '187px', '255px', 'auto', 'auto'],
                            id: 'safe_open',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/safe_open.png', '0px', '0px']
                        },
                        {
                            rect: ['50', '83', '50', '50', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'puzzle5An',
                            id: 'puzzle5An',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '187px', '255px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    labels: {
                        "open": 500
                    },
                    data: [
                        [
                            "eid11057",
                            "display",
                            0,
                            0,
                            "linear",
                            "${safe_open}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11549",
                            "opacity",
                            632,
                            250,
                            "linear",
                            "${puzzle5An}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11550",
                            "display",
                            632,
                            0,
                            "linear",
                            "${puzzle5An}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11060",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${safe_open}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "puzzle5An": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'puzzle_5',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_5.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid11555",
                            "filter.contrast",
                            0,
                            1500,
                            "easeOutQuad",
                            "${puzzle_5}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid11558",
                            "filter.contrast",
                            1500,
                            500,
                            "easeOutQuad",
                            "${puzzle_5}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid11556",
                            "filter.saturate",
                            0,
                            1500,
                            "easeOutQuad",
                            "${puzzle_5}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid11557",
                            "filter.saturate",
                            1500,
                            500,
                            "easeOutQuad",
                            "${puzzle_5}",
                            '1.5',
                            '1'
                        ]
                    ]
                }
            },
            "zombie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'zombie',
                            opacity: '1',
                            rect: ['0px', '0px', '1024px', '2048px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/zombie.png', '0px', '0px', '1024px', '2048px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '112px']
                        }
                    }
                },
                timeline: {
                    duration: 6500,
                    autoPlay: true,
                    labels: {
                        "die": 6000
                    },
                    data: [
                        [
                            "eid11983",
                            "width",
                            0,
                            0,
                            "linear",
                            "${zombie}",
                            '0px',
                            '89px'
                        ],
                        [
                            "eid11988",
                            "width",
                            125,
                            0,
                            "linear",
                            "${zombie}",
                            '89px',
                            '88px'
                        ],
                        [
                            "eid12000",
                            "width",
                            458,
                            0,
                            "linear",
                            "${zombie}",
                            '88px',
                            '87px'
                        ],
                        [
                            "eid12006",
                            "width",
                            666,
                            0,
                            "linear",
                            "${zombie}",
                            '87px',
                            '88px'
                        ],
                        [
                            "eid12008",
                            "width",
                            708,
                            0,
                            "linear",
                            "${zombie}",
                            '88px',
                            '87px'
                        ],
                        [
                            "eid12012",
                            "width",
                            791,
                            0,
                            "linear",
                            "${zombie}",
                            '87px',
                            '86px'
                        ],
                        [
                            "eid12019",
                            "width",
                            958,
                            0,
                            "linear",
                            "${zombie}",
                            '86px',
                            '87px'
                        ],
                        [
                            "eid12021",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${zombie}",
                            '87px',
                            '86px'
                        ],
                        [
                            "eid12024",
                            "width",
                            1083,
                            0,
                            "linear",
                            "${zombie}",
                            '86px',
                            '87px'
                        ],
                        [
                            "eid12027",
                            "width",
                            1125,
                            0,
                            "linear",
                            "${zombie}",
                            '87px',
                            '86px'
                        ],
                        [
                            "eid12033",
                            "width",
                            1291,
                            0,
                            "linear",
                            "${zombie}",
                            '86px',
                            '85px'
                        ],
                        [
                            "eid12035",
                            "width",
                            1333,
                            0,
                            "linear",
                            "${zombie}",
                            '85px',
                            '84px'
                        ],
                        [
                            "eid12040",
                            "width",
                            1458,
                            0,
                            "linear",
                            "${zombie}",
                            '84px',
                            '83px'
                        ],
                        [
                            "eid12043",
                            "width",
                            1541,
                            0,
                            "linear",
                            "${zombie}",
                            '83px',
                            '84px'
                        ],
                        [
                            "eid12051",
                            "width",
                            1750,
                            0,
                            "linear",
                            "${zombie}",
                            '84px',
                            '83px'
                        ],
                        [
                            "eid12053",
                            "width",
                            1791,
                            0,
                            "linear",
                            "${zombie}",
                            '83px',
                            '84px'
                        ],
                        [
                            "eid12064",
                            "width",
                            2166,
                            0,
                            "linear",
                            "${zombie}",
                            '84px',
                            '85px'
                        ],
                        [
                            "eid12072",
                            "width",
                            2458,
                            0,
                            "linear",
                            "${zombie}",
                            '85px',
                            '84px'
                        ],
                        [
                            "eid12075",
                            "width",
                            2541,
                            0,
                            "linear",
                            "${zombie}",
                            '84px',
                            '85px'
                        ],
                        [
                            "eid12077",
                            "width",
                            2583,
                            0,
                            "linear",
                            "${zombie}",
                            '85px',
                            '84px'
                        ],
                        [
                            "eid12083",
                            "width",
                            2791,
                            0,
                            "linear",
                            "${zombie}",
                            '84px',
                            '85px'
                        ],
                        [
                            "eid12087",
                            "width",
                            2833,
                            0,
                            "linear",
                            "${zombie}",
                            '85px',
                            '84px'
                        ],
                        [
                            "eid12090",
                            "width",
                            2916,
                            0,
                            "linear",
                            "${zombie}",
                            '84px',
                            '85px'
                        ],
                        [
                            "eid12092",
                            "width",
                            2958,
                            0,
                            "linear",
                            "${zombie}",
                            '85px',
                            '84px'
                        ],
                        [
                            "eid12097",
                            "width",
                            3083,
                            0,
                            "linear",
                            "${zombie}",
                            '84px',
                            '85px'
                        ],
                        [
                            "eid12100",
                            "width",
                            3166,
                            0,
                            "linear",
                            "${zombie}",
                            '85px',
                            '86px'
                        ],
                        [
                            "eid12102",
                            "width",
                            3208,
                            0,
                            "linear",
                            "${zombie}",
                            '86px',
                            '85px'
                        ],
                        [
                            "eid12123",
                            "width",
                            3916,
                            0,
                            "linear",
                            "${zombie}",
                            '85px',
                            '86px'
                        ],
                        [
                            "eid12129",
                            "width",
                            4083,
                            0,
                            "linear",
                            "${zombie}",
                            '86px',
                            '87px'
                        ],
                        [
                            "eid12136",
                            "width",
                            4291,
                            0,
                            "linear",
                            "${zombie}",
                            '87px',
                            '88px'
                        ],
                        [
                            "eid12148",
                            "width",
                            4625,
                            0,
                            "linear",
                            "${zombie}",
                            '88px',
                            '89px'
                        ],
                        [
                            "eid12324",
                            "width",
                            6000,
                            0,
                            "linear",
                            "${zombie}",
                            '89px',
                            '89px'
                        ],
                        [
                            "eid11984",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${zombie}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11985",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${zombie}",
                            [0,0],
                            [-89,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11986",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${zombie}",
                            [-89,0],
                            [-178,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11989",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${zombie}",
                            [-178,0],
                            [-267,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11990",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${zombie}",
                            [-267,0],
                            [-355,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11991",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${zombie}",
                            [-355,0],
                            [-443,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11992",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${zombie}",
                            [-443,0],
                            [-531,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11993",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${zombie}",
                            [-531,0],
                            [-619,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11996",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${zombie}",
                            [-619,0],
                            [-707,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11997",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${zombie}",
                            [-707,0],
                            [-795,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11998",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${zombie}",
                            [-795,0],
                            [-883,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12001",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${zombie}",
                            [-883,0],
                            [0,-110],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12002",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${zombie}",
                            [0,-110],
                            [-87,-110],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12003",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${zombie}",
                            [-87,-110],
                            [-174,-110],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12004",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${zombie}",
                            [-174,-110],
                            [-261,-110],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12005",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${zombie}",
                            [-261,-110],
                            [-348,-110],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12007",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${zombie}",
                            [-348,-110],
                            [-435,-110],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12009",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${zombie}",
                            [-435,-110],
                            [-523,-110],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12010",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${zombie}",
                            [-523,-110],
                            [-610,-110],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12013",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${zombie}",
                            [-610,-110],
                            [-697,-110],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12014",
                            "background-position",
                            833,
                            0,
                            "linear",
                            "${zombie}",
                            [-697,-110],
                            [-783,-110],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12017",
                            "background-position",
                            875,
                            0,
                            "linear",
                            "${zombie}",
                            [-783,-110],
                            [-869,-110],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12018",
                            "background-position",
                            916,
                            0,
                            "linear",
                            "${zombie}",
                            [-869,-110],
                            [0,-221],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12020",
                            "background-position",
                            958,
                            0,
                            "linear",
                            "${zombie}",
                            [0,-221],
                            [-86,-221],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12022",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${zombie}",
                            [-86,-221],
                            [-173,-221],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12023",
                            "background-position",
                            1041,
                            0,
                            "linear",
                            "${zombie}",
                            [-173,-221],
                            [-259,-221],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12025",
                            "background-position",
                            1083,
                            0,
                            "linear",
                            "${zombie}",
                            [-259,-221],
                            [-345,-221],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12028",
                            "background-position",
                            1125,
                            0,
                            "linear",
                            "${zombie}",
                            [-345,-221],
                            [-432,-221],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12029",
                            "background-position",
                            1166,
                            0,
                            "linear",
                            "${zombie}",
                            [-432,-221],
                            [-518,-221],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12030",
                            "background-position",
                            1208,
                            0,
                            "linear",
                            "${zombie}",
                            [-518,-221],
                            [-604,-221],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12031",
                            "background-position",
                            1250,
                            0,
                            "linear",
                            "${zombie}",
                            [-604,-221],
                            [-690,-221],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12034",
                            "background-position",
                            1291,
                            0,
                            "linear",
                            "${zombie}",
                            [-690,-221],
                            [-776,-221],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12036",
                            "background-position",
                            1333,
                            0,
                            "linear",
                            "${zombie}",
                            [-776,-221],
                            [-861,-221],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12037",
                            "background-position",
                            1375,
                            0,
                            "linear",
                            "${zombie}",
                            [-861,-221],
                            [0,-332],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12038",
                            "background-position",
                            1416,
                            0,
                            "linear",
                            "${zombie}",
                            [0,-332],
                            [-84,-332],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12041",
                            "background-position",
                            1458,
                            0,
                            "linear",
                            "${zombie}",
                            [-84,-332],
                            [-168,-332],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12042",
                            "background-position",
                            1500,
                            0,
                            "linear",
                            "${zombie}",
                            [-168,-332],
                            [-251,-332],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12044",
                            "background-position",
                            1541,
                            0,
                            "linear",
                            "${zombie}",
                            [-251,-332],
                            [-334,-332],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12045",
                            "background-position",
                            1583,
                            0,
                            "linear",
                            "${zombie}",
                            [-334,-332],
                            [-418,-332],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12046",
                            "background-position",
                            1625,
                            0,
                            "linear",
                            "${zombie}",
                            [-418,-332],
                            [-502,-332],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12047",
                            "background-position",
                            1666,
                            0,
                            "linear",
                            "${zombie}",
                            [-502,-332],
                            [-586,-332],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12048",
                            "background-position",
                            1708,
                            0,
                            "linear",
                            "${zombie}",
                            [-586,-332],
                            [-670,-332],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12052",
                            "background-position",
                            1750,
                            0,
                            "linear",
                            "${zombie}",
                            [-670,-332],
                            [-754,-332],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12054",
                            "background-position",
                            1791,
                            0,
                            "linear",
                            "${zombie}",
                            [-754,-332],
                            [-837,-332],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12055",
                            "background-position",
                            1833,
                            0,
                            "linear",
                            "${zombie}",
                            [-837,-332],
                            [-921,-332],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12056",
                            "background-position",
                            1875,
                            0,
                            "linear",
                            "${zombie}",
                            [-921,-332],
                            [0,-444],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12057",
                            "background-position",
                            1916,
                            0,
                            "linear",
                            "${zombie}",
                            [0,-444],
                            [-84,-444],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12058",
                            "background-position",
                            1958,
                            0,
                            "linear",
                            "${zombie}",
                            [-84,-444],
                            [-168,-444],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12059",
                            "background-position",
                            2000,
                            0,
                            "linear",
                            "${zombie}",
                            [-168,-444],
                            [-252,-444],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12060",
                            "background-position",
                            2041,
                            0,
                            "linear",
                            "${zombie}",
                            [-252,-444],
                            [-336,-444],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12061",
                            "background-position",
                            2083,
                            0,
                            "linear",
                            "${zombie}",
                            [-336,-444],
                            [-420,-444],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12062",
                            "background-position",
                            2125,
                            0,
                            "linear",
                            "${zombie}",
                            [-420,-444],
                            [-504,-444],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12065",
                            "background-position",
                            2166,
                            0,
                            "linear",
                            "${zombie}",
                            [-504,-444],
                            [-588,-444],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12066",
                            "background-position",
                            2208,
                            0,
                            "linear",
                            "${zombie}",
                            [-588,-444],
                            [-673,-444],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12067",
                            "background-position",
                            2250,
                            0,
                            "linear",
                            "${zombie}",
                            [-673,-444],
                            [-758,-444],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12068",
                            "background-position",
                            2291,
                            0,
                            "linear",
                            "${zombie}",
                            [-758,-444],
                            [-843,-444],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12069",
                            "background-position",
                            2333,
                            0,
                            "linear",
                            "${zombie}",
                            [-843,-444],
                            [-928,-444],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12070",
                            "background-position",
                            2375,
                            0,
                            "linear",
                            "${zombie}",
                            [-928,-444],
                            [0,-556],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12071",
                            "background-position",
                            2416,
                            0,
                            "linear",
                            "${zombie}",
                            [0,-556],
                            [-85,-556],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12073",
                            "background-position",
                            2458,
                            0,
                            "linear",
                            "${zombie}",
                            [-85,-556],
                            [-170,-556],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12074",
                            "background-position",
                            2500,
                            0,
                            "linear",
                            "${zombie}",
                            [-170,-556],
                            [-254,-556],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12076",
                            "background-position",
                            2541,
                            0,
                            "linear",
                            "${zombie}",
                            [-254,-556],
                            [-338,-556],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12078",
                            "background-position",
                            2583,
                            0,
                            "linear",
                            "${zombie}",
                            [-338,-556],
                            [-423,-556],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12079",
                            "background-position",
                            2625,
                            0,
                            "linear",
                            "${zombie}",
                            [-423,-556],
                            [-507,-556],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12080",
                            "background-position",
                            2666,
                            0,
                            "linear",
                            "${zombie}",
                            [-507,-556],
                            [-591,-556],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12081",
                            "background-position",
                            2708,
                            0,
                            "linear",
                            "${zombie}",
                            [-591,-556],
                            [-675,-556],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12082",
                            "background-position",
                            2750,
                            0,
                            "linear",
                            "${zombie}",
                            [-675,-556],
                            [-759,-556],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12084",
                            "background-position",
                            2791,
                            0,
                            "linear",
                            "${zombie}",
                            [-759,-556],
                            [-843,-556],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12088",
                            "background-position",
                            2833,
                            0,
                            "linear",
                            "${zombie}",
                            [-843,-556],
                            [-928,-556],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12089",
                            "background-position",
                            2875,
                            0,
                            "linear",
                            "${zombie}",
                            [-928,-556],
                            [0,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12091",
                            "background-position",
                            2916,
                            0,
                            "linear",
                            "${zombie}",
                            [0,-668],
                            [-84,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12093",
                            "background-position",
                            2958,
                            0,
                            "linear",
                            "${zombie}",
                            [-84,-668],
                            [-169,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12094",
                            "background-position",
                            3000,
                            0,
                            "linear",
                            "${zombie}",
                            [-169,-668],
                            [-253,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12095",
                            "background-position",
                            3041,
                            0,
                            "linear",
                            "${zombie}",
                            [-253,-668],
                            [-337,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12098",
                            "background-position",
                            3083,
                            0,
                            "linear",
                            "${zombie}",
                            [-337,-668],
                            [-421,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12099",
                            "background-position",
                            3125,
                            0,
                            "linear",
                            "${zombie}",
                            [-421,-668],
                            [-506,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12101",
                            "background-position",
                            3166,
                            0,
                            "linear",
                            "${zombie}",
                            [-506,-668],
                            [-591,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12103",
                            "background-position",
                            3208,
                            0,
                            "linear",
                            "${zombie}",
                            [-591,-668],
                            [-677,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12104",
                            "background-position",
                            3250,
                            0,
                            "linear",
                            "${zombie}",
                            [-677,-668],
                            [-762,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12105",
                            "background-position",
                            3291,
                            0,
                            "linear",
                            "${zombie}",
                            [-762,-668],
                            [-847,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12106",
                            "background-position",
                            3333,
                            0,
                            "linear",
                            "${zombie}",
                            [-847,-668],
                            [-932,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12107",
                            "background-position",
                            3375,
                            0,
                            "linear",
                            "${zombie}",
                            [-932,-668],
                            [0,-779],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12108",
                            "background-position",
                            3416,
                            0,
                            "linear",
                            "${zombie}",
                            [0,-779],
                            [-85,-779],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12109",
                            "background-position",
                            3458,
                            0,
                            "linear",
                            "${zombie}",
                            [-85,-779],
                            [-170,-779],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12110",
                            "background-position",
                            3500,
                            0,
                            "linear",
                            "${zombie}",
                            [-170,-779],
                            [-255,-779],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12111",
                            "background-position",
                            3541,
                            0,
                            "linear",
                            "${zombie}",
                            [-255,-779],
                            [-340,-779],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12112",
                            "background-position",
                            3583,
                            0,
                            "linear",
                            "${zombie}",
                            [-340,-779],
                            [-425,-779],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12113",
                            "background-position",
                            3625,
                            0,
                            "linear",
                            "${zombie}",
                            [-425,-779],
                            [-510,-779],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12114",
                            "background-position",
                            3666,
                            0,
                            "linear",
                            "${zombie}",
                            [-510,-779],
                            [-595,-779],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12115",
                            "background-position",
                            3708,
                            0,
                            "linear",
                            "${zombie}",
                            [-595,-779],
                            [-680,-779],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12116",
                            "background-position",
                            3750,
                            0,
                            "linear",
                            "${zombie}",
                            [-680,-779],
                            [-765,-779],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12117",
                            "background-position",
                            3791,
                            0,
                            "linear",
                            "${zombie}",
                            [-765,-779],
                            [-850,-779],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12120",
                            "background-position",
                            3833,
                            0,
                            "linear",
                            "${zombie}",
                            [-850,-779],
                            [-935,-779],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12121",
                            "background-position",
                            3875,
                            0,
                            "linear",
                            "${zombie}",
                            [-935,-779],
                            [0,-890],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12124",
                            "background-position",
                            3916,
                            0,
                            "linear",
                            "${zombie}",
                            [0,-890],
                            [-85,-890],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12125",
                            "background-position",
                            3958,
                            0,
                            "linear",
                            "${zombie}",
                            [-85,-890],
                            [-171,-890],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12126",
                            "background-position",
                            4000,
                            0,
                            "linear",
                            "${zombie}",
                            [-171,-890],
                            [-257,-890],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12127",
                            "background-position",
                            4041,
                            0,
                            "linear",
                            "${zombie}",
                            [-257,-890],
                            [-343,-890],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12130",
                            "background-position",
                            4083,
                            0,
                            "linear",
                            "${zombie}",
                            [-343,-890],
                            [-429,-890],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12131",
                            "background-position",
                            4125,
                            0,
                            "linear",
                            "${zombie}",
                            [-429,-890],
                            [-516,-890],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12132",
                            "background-position",
                            4166,
                            0,
                            "linear",
                            "${zombie}",
                            [-516,-890],
                            [-603,-890],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12133",
                            "background-position",
                            4208,
                            0,
                            "linear",
                            "${zombie}",
                            [-603,-890],
                            [-690,-890],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12134",
                            "background-position",
                            4250,
                            0,
                            "linear",
                            "${zombie}",
                            [-690,-890],
                            [-777,-890],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12137",
                            "background-position",
                            4291,
                            0,
                            "linear",
                            "${zombie}",
                            [-777,-890],
                            [-864,-890],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12140",
                            "background-position",
                            4333,
                            0,
                            "linear",
                            "${zombie}",
                            [-864,-890],
                            [0,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12141",
                            "background-position",
                            4375,
                            0,
                            "linear",
                            "${zombie}",
                            [0,-1000],
                            [-88,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12142",
                            "background-position",
                            4416,
                            0,
                            "linear",
                            "${zombie}",
                            [-88,-1000],
                            [-176,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12143",
                            "background-position",
                            4458,
                            0,
                            "linear",
                            "${zombie}",
                            [-176,-1000],
                            [-264,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12144",
                            "background-position",
                            4500,
                            0,
                            "linear",
                            "${zombie}",
                            [-264,-1000],
                            [-352,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12145",
                            "background-position",
                            4541,
                            0,
                            "linear",
                            "${zombie}",
                            [-352,-1000],
                            [-440,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12146",
                            "background-position",
                            4583,
                            0,
                            "linear",
                            "${zombie}",
                            [-440,-1000],
                            [-528,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12149",
                            "background-position",
                            4625,
                            0,
                            "linear",
                            "${zombie}",
                            [-528,-1000],
                            [-616,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12150",
                            "background-position",
                            4666,
                            0,
                            "linear",
                            "${zombie}",
                            [-616,-1000],
                            [-705,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12151",
                            "background-position",
                            4708,
                            0,
                            "linear",
                            "${zombie}",
                            [-705,-1000],
                            [-794,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12152",
                            "background-position",
                            4750,
                            0,
                            "linear",
                            "${zombie}",
                            [-794,-1000],
                            [-883,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12153",
                            "background-position",
                            4791,
                            0,
                            "linear",
                            "${zombie}",
                            [-883,-1000],
                            [0,-1109],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12154",
                            "background-position",
                            4833,
                            0,
                            "linear",
                            "${zombie}",
                            [0,-1109],
                            [-89,-1109],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12155",
                            "background-position",
                            4875,
                            0,
                            "linear",
                            "${zombie}",
                            [-89,-1109],
                            [-178,-1109],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12156",
                            "background-position",
                            4916,
                            0,
                            "linear",
                            "${zombie}",
                            [-178,-1109],
                            [-267,-1109],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12157",
                            "background-position",
                            4958,
                            0,
                            "linear",
                            "${zombie}",
                            [-267,-1109],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11987",
                            "left",
                            125,
                            0,
                            "linear",
                            "${zombie}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid11999",
                            "left",
                            458,
                            0,
                            "linear",
                            "${zombie}",
                            '1px',
                            '2px'
                        ],
                        [
                            "eid12011",
                            "left",
                            791,
                            0,
                            "linear",
                            "${zombie}",
                            '2px',
                            '3px'
                        ],
                        [
                            "eid12026",
                            "left",
                            1125,
                            0,
                            "linear",
                            "${zombie}",
                            '3px',
                            '4px'
                        ],
                        [
                            "eid12032",
                            "left",
                            1291,
                            0,
                            "linear",
                            "${zombie}",
                            '4px',
                            '5px'
                        ],
                        [
                            "eid12039",
                            "left",
                            1458,
                            0,
                            "linear",
                            "${zombie}",
                            '5px',
                            '6px'
                        ],
                        [
                            "eid12063",
                            "left",
                            2166,
                            0,
                            "linear",
                            "${zombie}",
                            '6px',
                            '5px'
                        ],
                        [
                            "eid12096",
                            "left",
                            3083,
                            0,
                            "linear",
                            "${zombie}",
                            '5px',
                            '4px'
                        ],
                        [
                            "eid12122",
                            "left",
                            3916,
                            0,
                            "linear",
                            "${zombie}",
                            '4px',
                            '3px'
                        ],
                        [
                            "eid12128",
                            "left",
                            4083,
                            0,
                            "linear",
                            "${zombie}",
                            '3px',
                            '2px'
                        ],
                        [
                            "eid12135",
                            "left",
                            4291,
                            0,
                            "linear",
                            "${zombie}",
                            '2px',
                            '1px'
                        ],
                        [
                            "eid12147",
                            "left",
                            4625,
                            0,
                            "linear",
                            "${zombie}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid12332",
                            "left",
                            6000,
                            500,
                            "linear",
                            "${zombie}",
                            '0px',
                            '132px'
                        ],
                        [
                            "eid11982",
                            "height",
                            0,
                            0,
                            "linear",
                            "${zombie}",
                            '0px',
                            '109px'
                        ],
                        [
                            "eid11995",
                            "height",
                            333,
                            0,
                            "linear",
                            "${zombie}",
                            '109px',
                            '110px'
                        ],
                        [
                            "eid12016",
                            "height",
                            875,
                            0,
                            "linear",
                            "${zombie}",
                            '110px',
                            '111px'
                        ],
                        [
                            "eid12050",
                            "height",
                            1750,
                            0,
                            "linear",
                            "${zombie}",
                            '111px',
                            '112px'
                        ],
                        [
                            "eid12086",
                            "height",
                            2833,
                            0,
                            "linear",
                            "${zombie}",
                            '112px',
                            '111px'
                        ],
                        [
                            "eid12119",
                            "height",
                            3833,
                            0,
                            "linear",
                            "${zombie}",
                            '111px',
                            '110px'
                        ],
                        [
                            "eid12139",
                            "height",
                            4333,
                            0,
                            "linear",
                            "${zombie}",
                            '110px',
                            '109px'
                        ],
                        [
                            "eid12325",
                            "height",
                            6000,
                            0,
                            "linear",
                            "${zombie}",
                            '109px',
                            '109px'
                        ],
                        [
                            "eid12335",
                            "opacity",
                            6250,
                            250,
                            "linear",
                            "${zombie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11981",
                            "top",
                            0,
                            0,
                            "linear",
                            "${zombie}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid11994",
                            "top",
                            333,
                            0,
                            "linear",
                            "${zombie}",
                            '3px',
                            '2px'
                        ],
                        [
                            "eid12015",
                            "top",
                            875,
                            0,
                            "linear",
                            "${zombie}",
                            '2px',
                            '1px'
                        ],
                        [
                            "eid12049",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${zombie}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid12085",
                            "top",
                            2833,
                            0,
                            "linear",
                            "${zombie}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid12118",
                            "top",
                            3833,
                            0,
                            "linear",
                            "${zombie}",
                            '1px',
                            '2px'
                        ],
                        [
                            "eid12138",
                            "top",
                            4333,
                            0,
                            "linear",
                            "${zombie}",
                            '2px',
                            '3px'
                        ],
                        [
                            "eid12333",
                            "top",
                            6000,
                            500,
                            "linear",
                            "${zombie}",
                            '3px',
                            '66px'
                        ],
                        [
                            "eid12327",
                            "rotateZ",
                            6000,
                            500,
                            "linear",
                            "${zombie}",
                            '0deg',
                            '180deg'
                        ]
                    ]
                }
            },
            "peashooter": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'peashooter',
                            rect: ['0px', '0px', '512px', '1024px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/peashooter.png', '0px', '0px', '512px', '1024px', 'no-repeat']
                        },
                        {
                            rect: ['72px', '24px', '26px', '26px', 'auto', 'auto'],
                            type: 'image',
                            id: 'pea',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/pea.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '2px', '126px', '116px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'block',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '126px', '116px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid12314",
                            "display",
                            875,
                            0,
                            "linear",
                            "${pea}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12161",
                            "width",
                            0,
                            0,
                            "linear",
                            "${peashooter}",
                            '0px',
                            '108px'
                        ],
                        [
                            "eid12166",
                            "width",
                            291,
                            0,
                            "linear",
                            "${peashooter}",
                            '108px',
                            '105px'
                        ],
                        [
                            "eid12171",
                            "width",
                            333,
                            0,
                            "linear",
                            "${peashooter}",
                            '105px',
                            '103px'
                        ],
                        [
                            "eid12176",
                            "width",
                            375,
                            0,
                            "linear",
                            "${peashooter}",
                            '103px',
                            '102px'
                        ],
                        [
                            "eid12181",
                            "width",
                            416,
                            0,
                            "linear",
                            "${peashooter}",
                            '102px',
                            '101px'
                        ],
                        [
                            "eid12185",
                            "width",
                            458,
                            0,
                            "linear",
                            "${peashooter}",
                            '101px',
                            '99px'
                        ],
                        [
                            "eid12188",
                            "width",
                            500,
                            0,
                            "linear",
                            "${peashooter}",
                            '99px',
                            '98px'
                        ],
                        [
                            "eid12190",
                            "width",
                            541,
                            0,
                            "linear",
                            "${peashooter}",
                            '98px',
                            '96px'
                        ],
                        [
                            "eid12194",
                            "width",
                            583,
                            0,
                            "linear",
                            "${peashooter}",
                            '96px',
                            '95px'
                        ],
                        [
                            "eid12200",
                            "width",
                            750,
                            0,
                            "linear",
                            "${peashooter}",
                            '95px',
                            '94px'
                        ],
                        [
                            "eid12207",
                            "width",
                            875,
                            0,
                            "linear",
                            "${peashooter}",
                            '94px',
                            '93px'
                        ],
                        [
                            "eid12212",
                            "width",
                            916,
                            0,
                            "linear",
                            "${peashooter}",
                            '93px',
                            '114px'
                        ],
                        [
                            "eid12217",
                            "width",
                            958,
                            0,
                            "linear",
                            "${peashooter}",
                            '114px',
                            '110px'
                        ],
                        [
                            "eid12222",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${peashooter}",
                            '110px',
                            '108px'
                        ],
                        [
                            "eid12227",
                            "width",
                            1041,
                            0,
                            "linear",
                            "${peashooter}",
                            '108px',
                            '109px'
                        ],
                        [
                            "eid12230",
                            "width",
                            1083,
                            0,
                            "linear",
                            "${peashooter}",
                            '109px',
                            '106px'
                        ],
                        [
                            "eid12233",
                            "width",
                            1125,
                            0,
                            "linear",
                            "${peashooter}",
                            '106px',
                            '107px'
                        ],
                        [
                            "eid12242",
                            "width",
                            1250,
                            0,
                            "linear",
                            "${peashooter}",
                            '107px',
                            '108px'
                        ],
                        [
                            "eid12336",
                            "display",
                            416,
                            0,
                            "linear",
                            "${block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12158",
                            "left",
                            0,
                            0,
                            "linear",
                            "${peashooter}",
                            '0px',
                            '5px'
                        ],
                        [
                            "eid12163",
                            "left",
                            291,
                            0,
                            "linear",
                            "${peashooter}",
                            '5px',
                            '4px'
                        ],
                        [
                            "eid12168",
                            "left",
                            333,
                            0,
                            "linear",
                            "${peashooter}",
                            '4px',
                            '3px'
                        ],
                        [
                            "eid12173",
                            "left",
                            375,
                            0,
                            "linear",
                            "${peashooter}",
                            '3px',
                            '2px'
                        ],
                        [
                            "eid12178",
                            "left",
                            416,
                            0,
                            "linear",
                            "${peashooter}",
                            '2px',
                            '1px'
                        ],
                        [
                            "eid12187",
                            "left",
                            500,
                            0,
                            "linear",
                            "${peashooter}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid12198",
                            "left",
                            750,
                            0,
                            "linear",
                            "${peashooter}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid12202",
                            "left",
                            791,
                            0,
                            "linear",
                            "${peashooter}",
                            '1px',
                            '2px'
                        ],
                        [
                            "eid12204",
                            "left",
                            833,
                            0,
                            "linear",
                            "${peashooter}",
                            '2px',
                            '3px'
                        ],
                        [
                            "eid12206",
                            "left",
                            875,
                            0,
                            "linear",
                            "${peashooter}",
                            '3px',
                            '5px'
                        ],
                        [
                            "eid12209",
                            "left",
                            916,
                            0,
                            "linear",
                            "${peashooter}",
                            '5px',
                            '12px'
                        ],
                        [
                            "eid12214",
                            "left",
                            958,
                            0,
                            "linear",
                            "${peashooter}",
                            '12px',
                            '16px'
                        ],
                        [
                            "eid12219",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${peashooter}",
                            '16px',
                            '17px'
                        ],
                        [
                            "eid12224",
                            "left",
                            1041,
                            0,
                            "linear",
                            "${peashooter}",
                            '17px',
                            '16px'
                        ],
                        [
                            "eid12229",
                            "left",
                            1083,
                            0,
                            "linear",
                            "${peashooter}",
                            '16px',
                            '17px'
                        ],
                        [
                            "eid12232",
                            "left",
                            1125,
                            0,
                            "linear",
                            "${peashooter}",
                            '17px',
                            '14px'
                        ],
                        [
                            "eid12235",
                            "left",
                            1166,
                            0,
                            "linear",
                            "${peashooter}",
                            '14px',
                            '12px'
                        ],
                        [
                            "eid12239",
                            "left",
                            1208,
                            0,
                            "linear",
                            "${peashooter}",
                            '12px',
                            '10px'
                        ],
                        [
                            "eid12241",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${peashooter}",
                            '10px',
                            '8px'
                        ],
                        [
                            "eid12244",
                            "left",
                            1291,
                            0,
                            "linear",
                            "${peashooter}",
                            '8px',
                            '7px'
                        ],
                        [
                            "eid12246",
                            "left",
                            1333,
                            0,
                            "linear",
                            "${peashooter}",
                            '7px',
                            '6px'
                        ],
                        [
                            "eid12248",
                            "left",
                            1375,
                            0,
                            "linear",
                            "${peashooter}",
                            '6px',
                            '5px'
                        ],
                        [
                            "eid12159",
                            "top",
                            0,
                            0,
                            "linear",
                            "${peashooter}",
                            '0px',
                            '9px'
                        ],
                        [
                            "eid12164",
                            "top",
                            291,
                            0,
                            "linear",
                            "${peashooter}",
                            '9px',
                            '7px'
                        ],
                        [
                            "eid12169",
                            "top",
                            333,
                            0,
                            "linear",
                            "${peashooter}",
                            '7px',
                            '5px'
                        ],
                        [
                            "eid12174",
                            "top",
                            375,
                            0,
                            "linear",
                            "${peashooter}",
                            '5px',
                            '3px'
                        ],
                        [
                            "eid12179",
                            "top",
                            416,
                            0,
                            "linear",
                            "${peashooter}",
                            '3px',
                            '2px'
                        ],
                        [
                            "eid12183",
                            "top",
                            458,
                            0,
                            "linear",
                            "${peashooter}",
                            '2px',
                            '1px'
                        ],
                        [
                            "eid12192",
                            "top",
                            583,
                            0,
                            "linear",
                            "${peashooter}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid12210",
                            "top",
                            916,
                            0,
                            "linear",
                            "${peashooter}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid12215",
                            "top",
                            958,
                            0,
                            "linear",
                            "${peashooter}",
                            '3px',
                            '6px'
                        ],
                        [
                            "eid12220",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${peashooter}",
                            '6px',
                            '7px'
                        ],
                        [
                            "eid12225",
                            "top",
                            1041,
                            0,
                            "linear",
                            "${peashooter}",
                            '7px',
                            '8px'
                        ],
                        [
                            "eid12236",
                            "top",
                            1166,
                            0,
                            "linear",
                            "${peashooter}",
                            '8px',
                            '9px'
                        ],
                        [
                            "eid12318",
                            "left",
                            875,
                            83,
                            "linear",
                            "${pea}",
                            '72px',
                            '106px'
                        ],
                        [
                            "eid12319",
                            "left",
                            958,
                            500,
                            "linear",
                            "${pea}",
                            '106px',
                            '642px'
                        ],
                        [
                            "eid12323",
                            "opacity",
                            1416,
                            84,
                            "linear",
                            "${pea}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12162",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${peashooter}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12167",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${peashooter}",
                            [0,0],
                            [-108,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12172",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${peashooter}",
                            [-108,0],
                            [-213,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12177",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${peashooter}",
                            [-213,0],
                            [-316,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12182",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${peashooter}",
                            [-316,0],
                            [0,-113],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12186",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${peashooter}",
                            [0,-113],
                            [-101,-113],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12189",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${peashooter}",
                            [-101,-113],
                            [-200,-113],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12191",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${peashooter}",
                            [-200,-113],
                            [-298,-113],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12195",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${peashooter}",
                            [-298,-113],
                            [-394,-113],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12196",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${peashooter}",
                            [-394,-113],
                            [0,-229],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12197",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${peashooter}",
                            [0,-229],
                            [-95,-229],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12201",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${peashooter}",
                            [-95,-229],
                            [-190,-229],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12203",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${peashooter}",
                            [-190,-229],
                            [-284,-229],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12205",
                            "background-position",
                            833,
                            0,
                            "linear",
                            "${peashooter}",
                            [-284,-229],
                            [-378,-229],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12208",
                            "background-position",
                            875,
                            0,
                            "linear",
                            "${peashooter}",
                            [-378,-229],
                            [0,-345],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12213",
                            "background-position",
                            916,
                            0,
                            "linear",
                            "${peashooter}",
                            [0,-345],
                            [-93,-345],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12218",
                            "background-position",
                            958,
                            0,
                            "linear",
                            "${peashooter}",
                            [-93,-345],
                            [-207,-345],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12223",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${peashooter}",
                            [-207,-345],
                            [-317,-345],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12228",
                            "background-position",
                            1041,
                            0,
                            "linear",
                            "${peashooter}",
                            [-317,-345],
                            [0,-460],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12231",
                            "background-position",
                            1083,
                            0,
                            "linear",
                            "${peashooter}",
                            [0,-460],
                            [-109,-460],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12234",
                            "background-position",
                            1125,
                            0,
                            "linear",
                            "${peashooter}",
                            [-109,-460],
                            [-215,-460],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12238",
                            "background-position",
                            1166,
                            0,
                            "linear",
                            "${peashooter}",
                            [-215,-460],
                            [-322,-460],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12240",
                            "background-position",
                            1208,
                            0,
                            "linear",
                            "${peashooter}",
                            [-322,-460],
                            [0,-568],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12243",
                            "background-position",
                            1250,
                            0,
                            "linear",
                            "${peashooter}",
                            [0,-568],
                            [-107,-568],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12245",
                            "background-position",
                            1291,
                            0,
                            "linear",
                            "${peashooter}",
                            [-107,-568],
                            [-215,-568],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12247",
                            "background-position",
                            1333,
                            0,
                            "linear",
                            "${peashooter}",
                            [-215,-568],
                            [-323,-568],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12249",
                            "background-position",
                            1375,
                            0,
                            "linear",
                            "${peashooter}",
                            [-323,-568],
                            [0,-675],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12250",
                            "background-position",
                            1416,
                            0,
                            "linear",
                            "${peashooter}",
                            [0,-675],
                            [-108,-675],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12251",
                            "background-position",
                            1458,
                            0,
                            "linear",
                            "${peashooter}",
                            [-108,-675],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12321",
                            "top",
                            958,
                            500,
                            "linear",
                            "${pea}",
                            '24px',
                            '34px'
                        ],
                        [
                            "eid12160",
                            "height",
                            0,
                            0,
                            "linear",
                            "${peashooter}",
                            '0px',
                            '107px'
                        ],
                        [
                            "eid12165",
                            "height",
                            291,
                            0,
                            "linear",
                            "${peashooter}",
                            '107px',
                            '109px'
                        ],
                        [
                            "eid12170",
                            "height",
                            333,
                            0,
                            "linear",
                            "${peashooter}",
                            '109px',
                            '111px'
                        ],
                        [
                            "eid12175",
                            "height",
                            375,
                            0,
                            "linear",
                            "${peashooter}",
                            '111px',
                            '113px'
                        ],
                        [
                            "eid12180",
                            "height",
                            416,
                            0,
                            "linear",
                            "${peashooter}",
                            '113px',
                            '114px'
                        ],
                        [
                            "eid12184",
                            "height",
                            458,
                            0,
                            "linear",
                            "${peashooter}",
                            '114px',
                            '115px'
                        ],
                        [
                            "eid12193",
                            "height",
                            583,
                            0,
                            "linear",
                            "${peashooter}",
                            '115px',
                            '116px'
                        ],
                        [
                            "eid12199",
                            "height",
                            750,
                            0,
                            "linear",
                            "${peashooter}",
                            '116px',
                            '115px'
                        ],
                        [
                            "eid12211",
                            "height",
                            916,
                            0,
                            "linear",
                            "${peashooter}",
                            '115px',
                            '113px'
                        ],
                        [
                            "eid12216",
                            "height",
                            958,
                            0,
                            "linear",
                            "${peashooter}",
                            '113px',
                            '110px'
                        ],
                        [
                            "eid12221",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${peashooter}",
                            '110px',
                            '109px'
                        ],
                        [
                            "eid12226",
                            "height",
                            1041,
                            0,
                            "linear",
                            "${peashooter}",
                            '109px',
                            '108px'
                        ],
                        [
                            "eid12237",
                            "height",
                            1166,
                            0,
                            "linear",
                            "${peashooter}",
                            '108px',
                            '107px'
                        ]
                    ]
                }
            },
            "s3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1206px', '1206px', 'auto', 'auto'],
                            id: 'scene1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/scene3.jpg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1', '1.05735']],
                            id: 'deskAn',
                            symbolName: 'deskAn',
                            rect: ['97', '797px', '659', '279', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['1027', '590', '121', '140', 'auto', 'auto'],
                            id: 'p5',
                            symbolName: 'p5',
                            type: 'rect'
                        },
                        {
                            rect: ['403', '505', '183', '237', 'auto', 'auto'],
                            id: 'p6',
                            symbolName: 'p6',
                            type: 'rect'
                        },
                        {
                            rect: ['2', '337', '296', '109', 'auto', 'auto'],
                            id: 'p7',
                            symbolName: 'p7',
                            type: 'rect'
                        },
                        {
                            rect: ['67', '22', '220', '266', 'auto', 'auto'],
                            id: 'p8',
                            symbolName: 'p8',
                            type: 'rect'
                        },
                        {
                            rect: ['602', '488', '271', '254', 'auto', 'auto'],
                            id: 'p2',
                            symbolName: 'p2',
                            type: 'rect'
                        },
                        {
                            rect: ['884px', '525', '137', '138', 'auto', 'auto'],
                            id: 'p4',
                            symbolName: 'p4',
                            type: 'rect'
                        },
                        {
                            rect: ['295', '159', '294', '339', 'auto', 'auto'],
                            id: 'p1',
                            symbolName: 'p1',
                            type: 'rect'
                        },
                        {
                            rect: ['610px', '270', '164', '204', 'auto', 'auto'],
                            id: 'p3',
                            symbolName: 'p3',
                            type: 'rect'
                        },
                        {
                            rect: ['5', '484', '239', '291', 'auto', 'auto'],
                            id: 'lamp',
                            symbolName: 'lamp',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1206px', '1206px']
                        }
                    }
                },
                timeline: {
                    duration: 1553,
                    autoPlay: false,
                    data: [
                        [
                            "eid12870",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${p7}",
                            '2px',
                            '-454px'
                        ],
                        [
                            "eid12873",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${p3}",
                            '610px',
                            '154px'
                        ],
                        [
                            "eid14420",
                            "top",
                            0,
                            0,
                            "linear",
                            "${deskAn}",
                            '797px',
                            '797px'
                        ],
                        [
                            "eid14418",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${deskAn}",
                            '1.05735',
                            '1.05735'
                        ],
                        [
                            "eid27",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${scene1}",
                            '0px',
                            '-456px'
                        ],
                        [
                            "eid12867",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${p4}",
                            '884px',
                            '428px'
                        ],
                        [
                            "eid12871",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${p8}",
                            '67px',
                            '-389px'
                        ],
                        [
                            "eid12869",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${p6}",
                            '403px',
                            '-53px'
                        ],
                        [
                            "eid12875",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${lamp}",
                            '5px',
                            '-451px'
                        ],
                        [
                            "eid13901",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${deskAn}",
                            '97px',
                            '-359px'
                        ],
                        [
                            "eid12874",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${p1}",
                            '295px',
                            '-161px'
                        ],
                        [
                            "eid12872",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${p2}",
                            '602px',
                            '146px'
                        ],
                        [
                            "eid12868",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${p5}",
                            '1027px',
                            '571px'
                        ]
                    ]
                }
            },
            "lamp": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'lamp_shadow',
                            rect: ['7px', '15px', '232px', '276px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene3/lamp_shadow.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'lamp_switch',
                            rect: ['196px', '118px', '25px', '92px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene3/lamp_switch.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '11px', '232px', '291px', 'auto', 'auto'],
                            id: 'lamp_off',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/lamp_off.png', '0px', '0px']
                        },
                        {
                            rect: ['-5px', '-39px', '251px', '331px', 'auto', 'auto'],
                            type: 'image',
                            id: 'lamp_on',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/lamp_on.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '239px', '291px', 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'touch',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'block',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '239px', '291px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid14058",
                            "display",
                            1000,
                            0,
                            "easeOutQuad",
                            "${lamp_off}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14046",
                            "height",
                            396,
                            185,
                            "easeOutQuad",
                            "${lamp_off}",
                            '291px',
                            '280px'
                        ],
                        [
                            "eid14049",
                            "height",
                            581,
                            169,
                            "easeOutQuad",
                            "${lamp_off}",
                            '280px',
                            '291px'
                        ],
                        [
                            "eid14056",
                            "opacity",
                            750,
                            0,
                            "easeOutQuad",
                            "${lamp_on}",
                            '1',
                            '1'
                        ],
                        [
                            "eid14057",
                            "opacity",
                            829,
                            171,
                            "easeOutQuad",
                            "${lamp_on}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14048",
                            "top",
                            396,
                            185,
                            "easeOutQuad",
                            "${lamp_off}",
                            '0px',
                            '11px'
                        ],
                        [
                            "eid14050",
                            "top",
                            581,
                            169,
                            "easeOutQuad",
                            "${lamp_off}",
                            '11px',
                            '0px'
                        ],
                        [
                            "eid14059",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${touch}",
                            'block',
                            'block'
                        ],
                        [
                            "eid14061",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${touch}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14060",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${touch}",
                            '0',
                            '0'
                        ],
                        [
                            "eid14042",
                            "top",
                            250,
                            250,
                            "easeOutQuad",
                            "${lamp_switch}",
                            '118px',
                            '128px'
                        ],
                        [
                            "eid14043",
                            "top",
                            500,
                            250,
                            "easeOutQuad",
                            "${lamp_switch}",
                            '128px',
                            '118px'
                        ],
                        [
                            "eid14037",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${lamp_on}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14051",
                            "display",
                            675,
                            0,
                            "easeOutQuad",
                            "${lamp_on}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14044",
                            "display",
                            750,
                            0,
                            "easeOutQuad",
                            "${lamp_on}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14052",
                            "display",
                            829,
                            0,
                            "easeOutQuad",
                            "${lamp_on}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "p8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'photo8',
                            rect: ['0px', '0px', '220px', '266px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene3/photo8.png', '0px', '0px']
                        },
                        {
                            rect: ['-17px', '-12px', '254px', '300px', 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'block',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '220px', '266px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid13971",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13965",
                            "rotateZ",
                            250,
                            83,
                            "easeOutQuad",
                            "${photo8}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid13966",
                            "rotateZ",
                            333,
                            83,
                            "easeOutQuad",
                            "${photo8}",
                            '5deg',
                            '-5deg'
                        ],
                        [
                            "eid13967",
                            "rotateZ",
                            417,
                            83,
                            "easeOutQuad",
                            "${photo8}",
                            '-5deg',
                            '0deg'
                        ],
                        [
                            "eid13968",
                            "rotateZ",
                            500,
                            83,
                            "easeOutQuad",
                            "${photo8}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid13969",
                            "rotateZ",
                            583,
                            83,
                            "easeOutQuad",
                            "${photo8}",
                            '5deg',
                            '-5deg'
                        ],
                        [
                            "eid13970",
                            "rotateZ",
                            667,
                            83,
                            "easeOutQuad",
                            "${photo8}",
                            '-5deg',
                            '0deg'
                        ],
                        [
                            "eid13963",
                            "-webkit-transform-origin",
                            250,
                            0,
                            "linear",
                            "${photo8}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41607",
                            "-moz-transform-origin",
                            250,
                            0,
                            "linear",
                            "${photo8}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41608",
                            "-ms-transform-origin",
                            250,
                            0,
                            "linear",
                            "${photo8}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41609",
                            "msTransformOrigin",
                            250,
                            0,
                            "linear",
                            "${photo8}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41610",
                            "-o-transform-origin",
                            250,
                            0,
                            "linear",
                            "${photo8}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41611",
                            "transform-origin",
                            250,
                            0,
                            "linear",
                            "${photo8}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "p7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '296px', '109px', 'auto', 'auto'],
                            id: 'photo7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/photo7.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '296px', '109px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "p6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '183px', '237px', 'auto', 'auto'],
                            id: 'photo6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/photo6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '183px', '237px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "p5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'photo5',
                            rect: ['8px', '0px', '121px', '140px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene3/photo5.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '121px', '768px', 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'block',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '121px', '140px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid13390",
                            "location",
                            250,
                            0,
                            "easeOutBack",
                            "${photo5}",
                            [[68.5, 0, 0, 0, 0, 0,0],[68.5, 0, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid13391",
                            "location",
                            500,
                            750,
                            "easeOutBounce",
                            "${photo5}",
                            [[60.5, 0, 0, 0, 0, 0,0],[60.5, 524, 0, 0, 0, 0,524]]
                        ],
                        [
                            "eid13388",
                            "-webkit-transform-origin",
                            250,
                            0,
                            "linear",
                            "${photo5}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41612",
                            "-moz-transform-origin",
                            250,
                            0,
                            "linear",
                            "${photo5}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41613",
                            "-ms-transform-origin",
                            250,
                            0,
                            "linear",
                            "${photo5}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41614",
                            "msTransformOrigin",
                            250,
                            0,
                            "linear",
                            "${photo5}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41615",
                            "-o-transform-origin",
                            250,
                            0,
                            "linear",
                            "${photo5}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41616",
                            "transform-origin",
                            250,
                            0,
                            "linear",
                            "${photo5}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13402",
                            "opacity",
                            250,
                            0,
                            "easeOutBack",
                            "${block}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13393",
                            "rotateZ",
                            250,
                            83,
                            "easeOutBack",
                            "${photo5}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid13394",
                            "rotateZ",
                            333,
                            83,
                            "easeOutBack",
                            "${photo5}",
                            '5deg',
                            '-5deg'
                        ],
                        [
                            "eid13395",
                            "rotateZ",
                            417,
                            83,
                            "easeOutBack",
                            "${photo5}",
                            '-5deg',
                            '0deg'
                        ],
                        [
                            "eid13396",
                            "rotateZ",
                            500,
                            83,
                            "easeOutBack",
                            "${photo5}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid13397",
                            "rotateZ",
                            583,
                            83,
                            "easeOutBack",
                            "${photo5}",
                            '5deg',
                            '-5deg'
                        ],
                        [
                            "eid13398",
                            "rotateZ",
                            667,
                            83,
                            "easeOutBack",
                            "${photo5}",
                            '-5deg',
                            '0deg'
                        ],
                        [
                            "eid13399",
                            "rotateZ",
                            750,
                            83,
                            "easeOutBack",
                            "${photo5}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid13400",
                            "rotateZ",
                            833,
                            83,
                            "easeOutBack",
                            "${photo5}",
                            '5deg',
                            '0deg'
                        ],
                        [
                            "eid13401",
                            "display",
                            250,
                            0,
                            "easeOutBack",
                            "${block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13392",
                            "opacity",
                            1112,
                            138,
                            "easeOutBack",
                            "${photo5}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "p4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'keyAn',
                            symbolName: 'keyAn',
                            rect: ['36', '64', '65', '66', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '0px', '137px', '138px', 'auto', 'auto'],
                            id: 'photo4',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/photo4.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            id: 'block',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '137px', '138px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            id: 'touch',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['70px', '49.3%', '137px', '138px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '137px', '138px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid12613",
                            "rotateZ",
                            250,
                            500,
                            "easeOutBack",
                            "${block}",
                            '0deg',
                            '90deg'
                        ],
                        [
                            "eid12765",
                            "rotateZ",
                            1250,
                            250,
                            "easeOutBack",
                            "${block}",
                            '90deg',
                            '0deg'
                        ],
                        [
                            "eid12609",
                            "rotateZ",
                            250,
                            500,
                            "easeOutBack",
                            "${photo4}",
                            '0deg',
                            '90deg'
                        ],
                        [
                            "eid12611",
                            "rotateZ",
                            1250,
                            250,
                            "easeOutBack",
                            "${photo4}",
                            '90deg',
                            '0deg'
                        ],
                        [
                            "eid13036",
                            "rotateZ",
                            2000,
                            83,
                            "easeOutBack",
                            "${photo4}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid13037",
                            "rotateZ",
                            2083,
                            83,
                            "easeOutBack",
                            "${photo4}",
                            '5deg',
                            '-5deg'
                        ],
                        [
                            "eid13038",
                            "rotateZ",
                            2167,
                            83,
                            "easeOutBack",
                            "${photo4}",
                            '-5deg',
                            '0deg'
                        ],
                        [
                            "eid13040",
                            "rotateZ",
                            2250,
                            83,
                            "easeOutBack",
                            "${photo4}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid13041",
                            "rotateZ",
                            2333,
                            83,
                            "easeOutBack",
                            "${photo4}",
                            '5deg',
                            '-5deg'
                        ],
                        [
                            "eid13042",
                            "rotateZ",
                            2417,
                            83,
                            "easeOutBack",
                            "${photo4}",
                            '-5deg',
                            '0deg'
                        ],
                        [
                            "eid13046",
                            "rotateZ",
                            2500,
                            83,
                            "easeOutBack",
                            "${photo4}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid13047",
                            "rotateZ",
                            2583,
                            83,
                            "easeOutBack",
                            "${photo4}",
                            '5deg',
                            '0deg'
                        ],
                        [
                            "eid12670",
                            "-webkit-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${photo4}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41617",
                            "-moz-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${photo4}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41618",
                            "-ms-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${photo4}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41619",
                            "msTransformOrigin",
                            250,
                            0,
                            "easeOutBack",
                            "${photo4}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41620",
                            "-o-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${photo4}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41621",
                            "transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${photo4}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13030",
                            "opacity",
                            2000,
                            0,
                            "easeOutBack",
                            "${touch}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12615",
                            "display",
                            250,
                            0,
                            "easeOutBack",
                            "${block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13463",
                            "display",
                            1750,
                            0,
                            "easeOutBack",
                            "${block}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12614",
                            "opacity",
                            250,
                            0,
                            "easeOutBack",
                            "${block}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13031",
                            "-webkit-transform-origin",
                            2000,
                            0,
                            "easeOutBack",
                            "${touch}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41622",
                            "-moz-transform-origin",
                            2000,
                            0,
                            "easeOutBack",
                            "${touch}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41623",
                            "-ms-transform-origin",
                            2000,
                            0,
                            "easeOutBack",
                            "${touch}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41624",
                            "msTransformOrigin",
                            2000,
                            0,
                            "easeOutBack",
                            "${touch}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41625",
                            "-o-transform-origin",
                            2000,
                            0,
                            "easeOutBack",
                            "${touch}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41626",
                            "transform-origin",
                            2000,
                            0,
                            "easeOutBack",
                            "${touch}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13053",
                            "opacity",
                            2862,
                            138,
                            "easeOutBack",
                            "${photo4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13464",
                            "left",
                            2000,
                            0,
                            "easeOutBack",
                            "${touch}",
                            '70px',
                            '70px'
                        ],
                        [
                            "eid13035",
                            "location",
                            2000,
                            0,
                            "easeOutBack",
                            "${photo4}",
                            [[68.5, 0, 0, 0, 0, 0,0],[68.5, 0, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid13045",
                            "location",
                            2250,
                            750,
                            "easeOutBounce",
                            "${photo4}",
                            [[68.5, 0, 0, 0, 0, 0,0],[68.5, 524, 0, 0, 0, 0,524]]
                        ],
                        [
                            "eid12671",
                            "-webkit-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${block}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41627",
                            "-moz-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${block}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41628",
                            "-ms-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${block}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41629",
                            "msTransformOrigin",
                            250,
                            0,
                            "easeOutBack",
                            "${block}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41630",
                            "-o-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${block}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41631",
                            "transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${block}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13029",
                            "display",
                            1971,
                            0,
                            "easeOutBack",
                            "${touch}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13276",
                            "display",
                            2029,
                            0,
                            "easeOutBack",
                            "${touch}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13466",
                            "top",
                            2000,
                            0,
                            "easeOutBack",
                            "${touch}",
                            '49.29%',
                            '49.29%'
                        ]
                    ]
                }
            },
            "p3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['60'], [0, 0, 0], [1, 1, 1]],
                            id: 'photo3',
                            type: 'image',
                            rect: ['-13px', '0px', '164px', '204px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene3/photo3.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['-136px', '-22px', '300px', '226px', 'auto', 'auto'],
                            display: 'none',
                            id: 'block',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '164px', '204px']
                        }
                    }
                },
                timeline: {
                    duration: 1553,
                    autoPlay: true,
                    data: [
                        [
                            "eid12577",
                            "opacity",
                            250,
                            0,
                            "easeOutBack",
                            "${block}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12576",
                            "display",
                            250,
                            0,
                            "easeOutBack",
                            "${block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12573",
                            "rotateZ",
                            250,
                            500,
                            "easeOutBack",
                            "${photo3}",
                            '0deg',
                            '60deg'
                        ],
                        [
                            "eid12575",
                            "rotateZ",
                            1250,
                            303,
                            "easeOutBack",
                            "${photo3}",
                            '60deg',
                            '0deg'
                        ],
                        [
                            "eid12713",
                            "-webkit-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${photo3}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41632",
                            "-moz-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${photo3}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41633",
                            "-ms-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${photo3}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41634",
                            "msTransformOrigin",
                            250,
                            0,
                            "easeOutBack",
                            "${photo3}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41635",
                            "-o-transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${photo3}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41636",
                            "transform-origin",
                            250,
                            0,
                            "easeOutBack",
                            "${photo3}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "p2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '271px', '254px', 'auto', 'auto'],
                            id: 'photo2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/photo2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '271px', '254px', 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'block',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '271px', '254px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid12537",
                            "top",
                            250,
                            500,
                            "easeOutQuad",
                            "${photo2}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid12539",
                            "opacity",
                            500,
                            250,
                            "easeOutQuad",
                            "${photo2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12540",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${block}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "p1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'photo1',
                            rect: ['0px', '0px', '294px', '339px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene3/photo1.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '294px', '339px', 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'block',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '294px', '339px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid12534",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12531",
                            "rotateZ",
                            250,
                            250,
                            "easeOutQuad",
                            "${photo1}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid12532",
                            "rotateZ",
                            500,
                            250,
                            "easeOutQuad",
                            "${photo1}",
                            '5deg',
                            '-5deg'
                        ],
                        [
                            "eid12533",
                            "rotateZ",
                            750,
                            250,
                            "easeOutQuad",
                            "${photo1}",
                            '-5deg',
                            '0deg'
                        ],
                        [
                            "eid12712",
                            "-webkit-transform-origin",
                            250,
                            0,
                            "easeOutQuad",
                            "${photo1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41637",
                            "-moz-transform-origin",
                            250,
                            0,
                            "easeOutQuad",
                            "${photo1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41638",
                            "-ms-transform-origin",
                            250,
                            0,
                            "easeOutQuad",
                            "${photo1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41639",
                            "msTransformOrigin",
                            250,
                            0,
                            "easeOutQuad",
                            "${photo1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41640",
                            "-o-transform-origin",
                            250,
                            0,
                            "easeOutQuad",
                            "${photo1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41641",
                            "transform-origin",
                            250,
                            0,
                            "easeOutQuad",
                            "${photo1}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "keyAn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '65px', '66px', 'auto', 'auto'],
                            id: 'key',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/key.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '65px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: false,
                    data: [
                        [
                            "eid12669",
                            "opacity",
                            2067,
                            183,
                            "easeOutQuad",
                            "${key}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12632",
                            "location",
                            14,
                            736,
                            "easeOutQuad",
                            "${key}",
                            [[32.5, 33, 0, 0, 0, 0,0],[42.5, 23, 0, 0, 0, 0,14.14]]
                        ],
                        [
                            "eid12663",
                            "location",
                            750,
                            750,
                            "linear",
                            "${key}",
                            [[42.5, 23, 0, 0, 0, 0,0],[-49.99, 364.06, -391.58, 260, -346.68, 230.18,366.92],[-421.5, 291, 0, 0, 0, 0,763.7]]
                        ],
                        [
                            "eid13535",
                            "location",
                            1896,
                            171,
                            "easeOutQuad",
                            "${key}",
                            [[-421.5, 291, 0, 0, 0, 0,0],[-431.5, 281, 0, 0, 0, 0,14.14]]
                        ],
                        [
                            "eid13536",
                            "location",
                            2067,
                            183,
                            "easeOutQuad",
                            "${key}",
                            [[-431.5, 281, 0, 0, 0, 0,0],[-421.5, 291, 0, 0, 0, 0,14.14]]
                        ],
                        [
                            "eid12627",
                            "rotateZ",
                            14,
                            736,
                            "easeOutQuad",
                            "${key}",
                            '0deg',
                            '-10deg'
                        ],
                        [
                            "eid12665",
                            "rotateZ",
                            750,
                            750,
                            "easeOutQuad",
                            "${key}",
                            '-10deg',
                            '190deg'
                        ],
                        [
                            "eid12622",
                            "scaleX",
                            0,
                            500,
                            "easeOutQuad",
                            "${key}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid12628",
                            "scaleX",
                            1000,
                            500,
                            "easeOutQuad",
                            "${key}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid12623",
                            "scaleY",
                            0,
                            500,
                            "easeOutQuad",
                            "${key}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid12629",
                            "scaleY",
                            1000,
                            500,
                            "easeOutQuad",
                            "${key}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            },
            "deskAn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '659px', '295px', 'auto', 'auto'],
                            type: 'image',
                            id: 'open',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/scene3/open.png', '0px', '0px']
                        },
                        {
                            rect: ['276px', '0px', '124px', '63px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'touch',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '659px', '295px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid14616",
                            "display",
                            500,
                            0,
                            "linear",
                            "${touch}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13839",
                            "display",
                            500,
                            0,
                            "linear",
                            "${open}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14411",
                            "height",
                            500,
                            0,
                            "linear",
                            "${open}",
                            '295px',
                            '295px'
                        ],
                        [
                            "eid13840",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${open}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "s4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1206px', '1206px', 'auto', 'auto'],
                            id: 'scene1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/scene4.jpg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'peashooter_s4',
                            symbolName: 'peashooter_s4',
                            transform: [[], ['-15'], [0, 0, 0], [1, 1, 1]],
                            rect: ['209px', '525px', null, null, 'auto', 'auto']
                        },
                        {
                            rect: ['43px', '536px', '323px', '166px', 'auto', 'auto'],
                            id: 'pot',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/pot.png', '0px', '0px']
                        },
                        {
                            rect: ['43', '536', '319', '161', 'auto', 'auto'],
                            id: 'touchPea',
                            symbolName: 'touchPea',
                            type: 'rect'
                        },
                        {
                            rect: ['598', '605', '157', '88', 'auto', 'auto'],
                            id: 'mugAn',
                            symbolName: 'mugAn',
                            type: 'rect'
                        },
                        {
                            rect: ['104', '34', '319', '390', 'auto', 'auto'],
                            id: 'photoS4',
                            symbolName: 'photoS4',
                            type: 'rect'
                        },
                        {
                            rect: ['915', '151', '139', '77', 'auto', 'auto'],
                            id: 'caAn',
                            symbolName: 'caAn',
                            type: 'rect'
                        },
                        {
                            rect: ['92px', '724px', '618px', '260px', 'auto', 'auto'],
                            id: 'desk_open',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/desk_open.png', '0px', '0px']
                        },
                        {
                            rect: ['793', '246', '377', '674', 'auto', 'auto'],
                            id: 'friOpen',
                            symbolName: 'friOpen',
                            type: 'rect'
                        },
                        {
                            rect: ['626', '286', '115', '257', 'auto', 'auto'],
                            id: 'zombieAn',
                            symbolName: 'zombieAn',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1206px', '1206px']
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: false,
                    data: [
                        [
                            "eid15810",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${mugAn}",
                            '598px',
                            '142px'
                        ],
                        [
                            "eid15809",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${touchPea}",
                            '43px',
                            '-413px'
                        ],
                        [
                            "eid16211",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${photoS4}",
                            '104px',
                            '-352px'
                        ],
                        [
                            "eid16097",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${desk_open}",
                            '92px',
                            '-364px'
                        ],
                        [
                            "eid27",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${scene1}",
                            '0px',
                            '-456px'
                        ],
                        [
                            "eid15807",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${peashooter_s4}",
                            '209px',
                            '-247px'
                        ],
                        [
                            "eid15808",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${pot}",
                            '43px',
                            '-413px'
                        ],
                        [
                            "eid15811",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${zombieAn}",
                            '626px',
                            '170px'
                        ],
                        [
                            "eid14762",
                            "top",
                            0,
                            0,
                            "linear",
                            "${peashooter_s4}",
                            '525px',
                            '525px'
                        ],
                        [
                            "eid14760",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${peashooter_s4}",
                            '-15deg',
                            '-15deg'
                        ],
                        [
                            "eid16313",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${friOpen}",
                            '793px',
                            '337px'
                        ],
                        [
                            "eid16601",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${caAn}",
                            '915px',
                            '459px'
                        ]
                    ]
                }
            },
            "peashooter_s4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '512px', '1024px', 'auto', 'auto'],
                            id: 'peashooter',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/peashooter.png', '0px', '0px', '512px', '1024px', 'no-repeat']
                        },
                        {
                            rect: ['26px', '-19px', '42px', '37px', 'auto', 'auto'],
                            id: 'peashooter_cap',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/peashooter_cap.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['512px', '24px', '26px', '26px', 'auto', 'auto'],
                            id: 'pea',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/scene2/pea.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '2px', '126px', '116px', 'auto', 'auto'],
                            display: 'none',
                            id: 'block',
                            opacity: '0',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '126px', '116px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid12314",
                            "display",
                            875,
                            0,
                            "linear",
                            "${pea}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14830",
                            "left",
                            291,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid14832",
                            "left",
                            333,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '26px',
                            '25px'
                        ],
                        [
                            "eid14834",
                            "left",
                            375,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '25px',
                            '24px'
                        ],
                        [
                            "eid14836",
                            "left",
                            416,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '24px',
                            '22px'
                        ],
                        [
                            "eid14838",
                            "left",
                            500,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '22px',
                            '20px'
                        ],
                        [
                            "eid14840",
                            "left",
                            583,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '20px',
                            '19px'
                        ],
                        [
                            "eid14843",
                            "left",
                            750,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '19px',
                            '20px'
                        ],
                        [
                            "eid14844",
                            "left",
                            791,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '20px',
                            '21px'
                        ],
                        [
                            "eid14845",
                            "left",
                            875,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '21px',
                            '22px'
                        ],
                        [
                            "eid14848",
                            "left",
                            916,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '22px',
                            '35px'
                        ],
                        [
                            "eid14850",
                            "left",
                            958,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '35px',
                            '36px'
                        ],
                        [
                            "eid14851",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '36px',
                            '37px'
                        ],
                        [
                            "eid14852",
                            "left",
                            1041,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '37px',
                            '38px'
                        ],
                        [
                            "eid14854",
                            "left",
                            1083,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '38px',
                            '36px'
                        ],
                        [
                            "eid14855",
                            "left",
                            1125,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '36px',
                            '34px'
                        ],
                        [
                            "eid14857",
                            "left",
                            1166,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '34px',
                            '31px'
                        ],
                        [
                            "eid14859",
                            "left",
                            1208,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '31px',
                            '30px'
                        ],
                        [
                            "eid14860",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '30px',
                            '29px'
                        ],
                        [
                            "eid14861",
                            "left",
                            1291,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '29px',
                            '27px'
                        ],
                        [
                            "eid14862",
                            "left",
                            1333,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '27px',
                            '26px'
                        ],
                        [
                            "eid14863",
                            "left",
                            1375,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '26px',
                            '25px'
                        ],
                        [
                            "eid14865",
                            "left",
                            1416,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '25px',
                            '26px'
                        ],
                        [
                            "eid12161",
                            "width",
                            0,
                            0,
                            "linear",
                            "${peashooter}",
                            '0px',
                            '108px'
                        ],
                        [
                            "eid12166",
                            "width",
                            291,
                            0,
                            "linear",
                            "${peashooter}",
                            '108px',
                            '105px'
                        ],
                        [
                            "eid12171",
                            "width",
                            333,
                            0,
                            "linear",
                            "${peashooter}",
                            '105px',
                            '103px'
                        ],
                        [
                            "eid12176",
                            "width",
                            375,
                            0,
                            "linear",
                            "${peashooter}",
                            '103px',
                            '102px'
                        ],
                        [
                            "eid12181",
                            "width",
                            416,
                            0,
                            "linear",
                            "${peashooter}",
                            '102px',
                            '101px'
                        ],
                        [
                            "eid12185",
                            "width",
                            458,
                            0,
                            "linear",
                            "${peashooter}",
                            '101px',
                            '99px'
                        ],
                        [
                            "eid12188",
                            "width",
                            500,
                            0,
                            "linear",
                            "${peashooter}",
                            '99px',
                            '98px'
                        ],
                        [
                            "eid12190",
                            "width",
                            541,
                            0,
                            "linear",
                            "${peashooter}",
                            '98px',
                            '96px'
                        ],
                        [
                            "eid12194",
                            "width",
                            583,
                            0,
                            "linear",
                            "${peashooter}",
                            '96px',
                            '95px'
                        ],
                        [
                            "eid12200",
                            "width",
                            750,
                            0,
                            "linear",
                            "${peashooter}",
                            '95px',
                            '94px'
                        ],
                        [
                            "eid12207",
                            "width",
                            875,
                            0,
                            "linear",
                            "${peashooter}",
                            '94px',
                            '93px'
                        ],
                        [
                            "eid12212",
                            "width",
                            916,
                            0,
                            "linear",
                            "${peashooter}",
                            '93px',
                            '114px'
                        ],
                        [
                            "eid12217",
                            "width",
                            958,
                            0,
                            "linear",
                            "${peashooter}",
                            '114px',
                            '110px'
                        ],
                        [
                            "eid12222",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${peashooter}",
                            '110px',
                            '108px'
                        ],
                        [
                            "eid12227",
                            "width",
                            1041,
                            0,
                            "linear",
                            "${peashooter}",
                            '108px',
                            '109px'
                        ],
                        [
                            "eid12230",
                            "width",
                            1083,
                            0,
                            "linear",
                            "${peashooter}",
                            '109px',
                            '106px'
                        ],
                        [
                            "eid12233",
                            "width",
                            1125,
                            0,
                            "linear",
                            "${peashooter}",
                            '106px',
                            '107px'
                        ],
                        [
                            "eid12242",
                            "width",
                            1250,
                            0,
                            "linear",
                            "${peashooter}",
                            '107px',
                            '108px'
                        ],
                        [
                            "eid12336",
                            "display",
                            416,
                            0,
                            "linear",
                            "${block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12158",
                            "left",
                            0,
                            0,
                            "linear",
                            "${peashooter}",
                            '0px',
                            '5px'
                        ],
                        [
                            "eid12163",
                            "left",
                            291,
                            0,
                            "linear",
                            "${peashooter}",
                            '5px',
                            '4px'
                        ],
                        [
                            "eid12168",
                            "left",
                            333,
                            0,
                            "linear",
                            "${peashooter}",
                            '4px',
                            '3px'
                        ],
                        [
                            "eid12173",
                            "left",
                            375,
                            0,
                            "linear",
                            "${peashooter}",
                            '3px',
                            '2px'
                        ],
                        [
                            "eid12178",
                            "left",
                            416,
                            0,
                            "linear",
                            "${peashooter}",
                            '2px',
                            '1px'
                        ],
                        [
                            "eid12187",
                            "left",
                            500,
                            0,
                            "linear",
                            "${peashooter}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid12198",
                            "left",
                            750,
                            0,
                            "linear",
                            "${peashooter}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid12202",
                            "left",
                            791,
                            0,
                            "linear",
                            "${peashooter}",
                            '1px',
                            '2px'
                        ],
                        [
                            "eid12204",
                            "left",
                            833,
                            0,
                            "linear",
                            "${peashooter}",
                            '2px',
                            '3px'
                        ],
                        [
                            "eid12206",
                            "left",
                            875,
                            0,
                            "linear",
                            "${peashooter}",
                            '3px',
                            '5px'
                        ],
                        [
                            "eid12209",
                            "left",
                            916,
                            0,
                            "linear",
                            "${peashooter}",
                            '5px',
                            '12px'
                        ],
                        [
                            "eid12214",
                            "left",
                            958,
                            0,
                            "linear",
                            "${peashooter}",
                            '12px',
                            '16px'
                        ],
                        [
                            "eid12219",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${peashooter}",
                            '16px',
                            '17px'
                        ],
                        [
                            "eid12224",
                            "left",
                            1041,
                            0,
                            "linear",
                            "${peashooter}",
                            '17px',
                            '16px'
                        ],
                        [
                            "eid12229",
                            "left",
                            1083,
                            0,
                            "linear",
                            "${peashooter}",
                            '16px',
                            '17px'
                        ],
                        [
                            "eid12232",
                            "left",
                            1125,
                            0,
                            "linear",
                            "${peashooter}",
                            '17px',
                            '14px'
                        ],
                        [
                            "eid12235",
                            "left",
                            1166,
                            0,
                            "linear",
                            "${peashooter}",
                            '14px',
                            '12px'
                        ],
                        [
                            "eid12239",
                            "left",
                            1208,
                            0,
                            "linear",
                            "${peashooter}",
                            '12px',
                            '10px'
                        ],
                        [
                            "eid12241",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${peashooter}",
                            '10px',
                            '8px'
                        ],
                        [
                            "eid12244",
                            "left",
                            1291,
                            0,
                            "linear",
                            "${peashooter}",
                            '8px',
                            '7px'
                        ],
                        [
                            "eid12246",
                            "left",
                            1333,
                            0,
                            "linear",
                            "${peashooter}",
                            '7px',
                            '6px'
                        ],
                        [
                            "eid12248",
                            "left",
                            1375,
                            0,
                            "linear",
                            "${peashooter}",
                            '6px',
                            '5px'
                        ],
                        [
                            "eid12159",
                            "top",
                            0,
                            0,
                            "linear",
                            "${peashooter}",
                            '0px',
                            '9px'
                        ],
                        [
                            "eid12164",
                            "top",
                            291,
                            0,
                            "linear",
                            "${peashooter}",
                            '9px',
                            '7px'
                        ],
                        [
                            "eid12169",
                            "top",
                            333,
                            0,
                            "linear",
                            "${peashooter}",
                            '7px',
                            '5px'
                        ],
                        [
                            "eid12174",
                            "top",
                            375,
                            0,
                            "linear",
                            "${peashooter}",
                            '5px',
                            '3px'
                        ],
                        [
                            "eid12179",
                            "top",
                            416,
                            0,
                            "linear",
                            "${peashooter}",
                            '3px',
                            '2px'
                        ],
                        [
                            "eid12183",
                            "top",
                            458,
                            0,
                            "linear",
                            "${peashooter}",
                            '2px',
                            '1px'
                        ],
                        [
                            "eid12192",
                            "top",
                            583,
                            0,
                            "linear",
                            "${peashooter}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid12210",
                            "top",
                            916,
                            0,
                            "linear",
                            "${peashooter}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid12215",
                            "top",
                            958,
                            0,
                            "linear",
                            "${peashooter}",
                            '3px',
                            '6px'
                        ],
                        [
                            "eid12220",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${peashooter}",
                            '6px',
                            '7px'
                        ],
                        [
                            "eid12225",
                            "top",
                            1041,
                            0,
                            "linear",
                            "${peashooter}",
                            '7px',
                            '8px'
                        ],
                        [
                            "eid12236",
                            "top",
                            1166,
                            0,
                            "linear",
                            "${peashooter}",
                            '8px',
                            '9px'
                        ],
                        [
                            "eid12318",
                            "left",
                            875,
                            83,
                            "linear",
                            "${pea}",
                            '72px',
                            '106px'
                        ],
                        [
                            "eid12319",
                            "left",
                            958,
                            500,
                            "linear",
                            "${pea}",
                            '106px',
                            '512px'
                        ],
                        [
                            "eid12323",
                            "opacity",
                            1416,
                            84,
                            "linear",
                            "${pea}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12321",
                            "top",
                            958,
                            500,
                            "linear",
                            "${pea}",
                            '24px',
                            '34px'
                        ],
                        [
                            "eid12162",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${peashooter}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12167",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${peashooter}",
                            [0,0],
                            [-108,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12172",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${peashooter}",
                            [-108,0],
                            [-213,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12177",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${peashooter}",
                            [-213,0],
                            [-316,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12182",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${peashooter}",
                            [-316,0],
                            [0,-113],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12186",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${peashooter}",
                            [0,-113],
                            [-101,-113],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12189",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${peashooter}",
                            [-101,-113],
                            [-200,-113],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12191",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${peashooter}",
                            [-200,-113],
                            [-298,-113],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12195",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${peashooter}",
                            [-298,-113],
                            [-394,-113],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12196",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${peashooter}",
                            [-394,-113],
                            [0,-229],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12197",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${peashooter}",
                            [0,-229],
                            [-95,-229],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12201",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${peashooter}",
                            [-95,-229],
                            [-190,-229],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12203",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${peashooter}",
                            [-190,-229],
                            [-284,-229],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12205",
                            "background-position",
                            833,
                            0,
                            "linear",
                            "${peashooter}",
                            [-284,-229],
                            [-378,-229],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12208",
                            "background-position",
                            875,
                            0,
                            "linear",
                            "${peashooter}",
                            [-378,-229],
                            [0,-345],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12213",
                            "background-position",
                            916,
                            0,
                            "linear",
                            "${peashooter}",
                            [0,-345],
                            [-93,-345],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12218",
                            "background-position",
                            958,
                            0,
                            "linear",
                            "${peashooter}",
                            [-93,-345],
                            [-207,-345],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12223",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${peashooter}",
                            [-207,-345],
                            [-317,-345],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12228",
                            "background-position",
                            1041,
                            0,
                            "linear",
                            "${peashooter}",
                            [-317,-345],
                            [0,-460],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12231",
                            "background-position",
                            1083,
                            0,
                            "linear",
                            "${peashooter}",
                            [0,-460],
                            [-109,-460],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12234",
                            "background-position",
                            1125,
                            0,
                            "linear",
                            "${peashooter}",
                            [-109,-460],
                            [-215,-460],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12238",
                            "background-position",
                            1166,
                            0,
                            "linear",
                            "${peashooter}",
                            [-215,-460],
                            [-322,-460],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12240",
                            "background-position",
                            1208,
                            0,
                            "linear",
                            "${peashooter}",
                            [-322,-460],
                            [0,-568],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12243",
                            "background-position",
                            1250,
                            0,
                            "linear",
                            "${peashooter}",
                            [0,-568],
                            [-107,-568],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12245",
                            "background-position",
                            1291,
                            0,
                            "linear",
                            "${peashooter}",
                            [-107,-568],
                            [-215,-568],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12247",
                            "background-position",
                            1333,
                            0,
                            "linear",
                            "${peashooter}",
                            [-215,-568],
                            [-323,-568],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12249",
                            "background-position",
                            1375,
                            0,
                            "linear",
                            "${peashooter}",
                            [-323,-568],
                            [0,-675],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12250",
                            "background-position",
                            1416,
                            0,
                            "linear",
                            "${peashooter}",
                            [0,-675],
                            [-108,-675],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12251",
                            "background-position",
                            1458,
                            0,
                            "linear",
                            "${peashooter}",
                            [-108,-675],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid14831",
                            "top",
                            291,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '-19px',
                            '-19px'
                        ],
                        [
                            "eid14833",
                            "top",
                            333,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '-19px',
                            '-20px'
                        ],
                        [
                            "eid14835",
                            "top",
                            375,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '-20px',
                            '-21px'
                        ],
                        [
                            "eid14837",
                            "top",
                            416,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '-21px',
                            '-23px'
                        ],
                        [
                            "eid14839",
                            "top",
                            500,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '-23px',
                            '-25px'
                        ],
                        [
                            "eid14846",
                            "top",
                            583,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '-25px',
                            '-26px'
                        ],
                        [
                            "eid14847",
                            "top",
                            916,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '-26px',
                            '-25px'
                        ],
                        [
                            "eid14849",
                            "top",
                            958,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '-25px',
                            '-21px'
                        ],
                        [
                            "eid14853",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '-21px',
                            '-20px'
                        ],
                        [
                            "eid14856",
                            "top",
                            1083,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '-20px',
                            '-19px'
                        ],
                        [
                            "eid14858",
                            "top",
                            1166,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '-19px',
                            '-18px'
                        ],
                        [
                            "eid14864",
                            "top",
                            1208,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '-18px',
                            '-17px'
                        ],
                        [
                            "eid14866",
                            "top",
                            1416,
                            0,
                            "linear",
                            "${peashooter_cap}",
                            '-17px',
                            '-19px'
                        ],
                        [
                            "eid12160",
                            "height",
                            0,
                            0,
                            "linear",
                            "${peashooter}",
                            '0px',
                            '107px'
                        ],
                        [
                            "eid12165",
                            "height",
                            291,
                            0,
                            "linear",
                            "${peashooter}",
                            '107px',
                            '109px'
                        ],
                        [
                            "eid12170",
                            "height",
                            333,
                            0,
                            "linear",
                            "${peashooter}",
                            '109px',
                            '111px'
                        ],
                        [
                            "eid12175",
                            "height",
                            375,
                            0,
                            "linear",
                            "${peashooter}",
                            '111px',
                            '113px'
                        ],
                        [
                            "eid12180",
                            "height",
                            416,
                            0,
                            "linear",
                            "${peashooter}",
                            '113px',
                            '114px'
                        ],
                        [
                            "eid12184",
                            "height",
                            458,
                            0,
                            "linear",
                            "${peashooter}",
                            '114px',
                            '115px'
                        ],
                        [
                            "eid12193",
                            "height",
                            583,
                            0,
                            "linear",
                            "${peashooter}",
                            '115px',
                            '116px'
                        ],
                        [
                            "eid12199",
                            "height",
                            750,
                            0,
                            "linear",
                            "${peashooter}",
                            '116px',
                            '115px'
                        ],
                        [
                            "eid12211",
                            "height",
                            916,
                            0,
                            "linear",
                            "${peashooter}",
                            '115px',
                            '113px'
                        ],
                        [
                            "eid12216",
                            "height",
                            958,
                            0,
                            "linear",
                            "${peashooter}",
                            '113px',
                            '110px'
                        ],
                        [
                            "eid12221",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${peashooter}",
                            '110px',
                            '109px'
                        ],
                        [
                            "eid12226",
                            "height",
                            1041,
                            0,
                            "linear",
                            "${peashooter}",
                            '109px',
                            '108px'
                        ],
                        [
                            "eid12237",
                            "height",
                            1166,
                            0,
                            "linear",
                            "${peashooter}",
                            '108px',
                            '107px'
                        ]
                    ]
                }
            },
            "touchPea": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '319px', '161px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'touch',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '319px', '161px', 'auto', 'auto'],
                            display: 'none',
                            id: 'block',
                            opacity: '0',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '319px', '161px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid14997",
                            "display",
                            57,
                            0,
                            "linear",
                            "${block}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14998",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${block}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "zombieAn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'rope',
                            rect: ['23px', '0px', '26px', '161px', 'auto', 'auto'],
                            transform: [[], ['3'], [], ['1', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/scene4/rope.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'zombie',
                            rect: ['-194px', '935px', '115px', '192px', 'auto', 'auto'],
                            transform: [[], ['10'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/scene4/zombie.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '115px', '257px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid15218",
                            "rotateZ",
                            57,
                            250,
                            "swing",
                            "${rope}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid15219",
                            "rotateZ",
                            307,
                            250,
                            "swing",
                            "${rope}",
                            '15deg',
                            '-10deg'
                        ],
                        [
                            "eid15220",
                            "rotateZ",
                            557,
                            250,
                            "swing",
                            "${rope}",
                            '-10deg',
                            '5deg'
                        ],
                        [
                            "eid15221",
                            "rotateZ",
                            807,
                            250,
                            "swing",
                            "${rope}",
                            '5deg',
                            '-3deg'
                        ],
                        [
                            "eid15222",
                            "rotateZ",
                            1057,
                            250,
                            "swing",
                            "${rope}",
                            '-3deg',
                            '0deg'
                        ],
                        [
                            "eid15237",
                            "rotateZ",
                            1364,
                            250,
                            "swing",
                            "${rope}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid15238",
                            "rotateZ",
                            1614,
                            250,
                            "swing",
                            "${rope}",
                            '15deg',
                            '-10deg'
                        ],
                        [
                            "eid15239",
                            "rotateZ",
                            1864,
                            250,
                            "swing",
                            "${rope}",
                            '-10deg',
                            '5deg'
                        ],
                        [
                            "eid15240",
                            "rotateZ",
                            2114,
                            250,
                            "swing",
                            "${rope}",
                            '5deg',
                            '-3deg'
                        ],
                        [
                            "eid15241",
                            "rotateZ",
                            2364,
                            250,
                            "swing",
                            "${rope}",
                            '-3deg',
                            '0deg'
                        ],
                        [
                            "eid15253",
                            "rotateZ",
                            2666,
                            250,
                            "swing",
                            "${rope}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid15254",
                            "rotateZ",
                            2916,
                            250,
                            "swing",
                            "${rope}",
                            '15deg',
                            '-10deg'
                        ],
                        [
                            "eid15255",
                            "rotateZ",
                            3166,
                            250,
                            "swing",
                            "${rope}",
                            '-10deg',
                            '10deg'
                        ],
                        [
                            "eid15267",
                            "rotateZ",
                            3416,
                            181,
                            "swing",
                            "${rope}",
                            '10deg',
                            '-5deg'
                        ],
                        [
                            "eid15268",
                            "rotateZ",
                            3597,
                            194,
                            "swing",
                            "${rope}",
                            '-5deg',
                            '3deg'
                        ],
                        [
                            "eid15269",
                            "rotateZ",
                            3791,
                            209,
                            "swing",
                            "${rope}",
                            '3deg',
                            '0deg'
                        ],
                        [
                            "eid15217",
                            "-webkit-transform-origin",
                            57,
                            0,
                            "linear",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41642",
                            "-moz-transform-origin",
                            57,
                            0,
                            "linear",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41643",
                            "-ms-transform-origin",
                            57,
                            0,
                            "linear",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41644",
                            "msTransformOrigin",
                            57,
                            0,
                            "linear",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41645",
                            "-o-transform-origin",
                            57,
                            0,
                            "linear",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41646",
                            "transform-origin",
                            57,
                            0,
                            "linear",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid15229",
                            "-webkit-transform-origin",
                            1364,
                            0,
                            "linear",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41647",
                            "-moz-transform-origin",
                            1364,
                            0,
                            "linear",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41648",
                            "-ms-transform-origin",
                            1364,
                            0,
                            "linear",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41649",
                            "msTransformOrigin",
                            1364,
                            0,
                            "linear",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41650",
                            "-o-transform-origin",
                            1364,
                            0,
                            "linear",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41651",
                            "transform-origin",
                            1364,
                            0,
                            "linear",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid15245",
                            "-webkit-transform-origin",
                            2666,
                            0,
                            "swing",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41652",
                            "-moz-transform-origin",
                            2666,
                            0,
                            "swing",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41653",
                            "-ms-transform-origin",
                            2666,
                            0,
                            "swing",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41654",
                            "msTransformOrigin",
                            2666,
                            0,
                            "swing",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41655",
                            "-o-transform-origin",
                            2666,
                            0,
                            "swing",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41656",
                            "transform-origin",
                            2666,
                            0,
                            "swing",
                            "${zombie}",
                            [25.22,-30.73],
                            [25.22,-30.73],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid15131",
                            "-webkit-transform-origin",
                            57,
                            0,
                            "linear",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41657",
                            "-moz-transform-origin",
                            57,
                            0,
                            "linear",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41658",
                            "-ms-transform-origin",
                            57,
                            0,
                            "linear",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41659",
                            "msTransformOrigin",
                            57,
                            0,
                            "linear",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41660",
                            "-o-transform-origin",
                            57,
                            0,
                            "linear",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41661",
                            "transform-origin",
                            57,
                            0,
                            "linear",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid15236",
                            "-webkit-transform-origin",
                            1364,
                            0,
                            "linear",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41662",
                            "-moz-transform-origin",
                            1364,
                            0,
                            "linear",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41663",
                            "-ms-transform-origin",
                            1364,
                            0,
                            "linear",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41664",
                            "msTransformOrigin",
                            1364,
                            0,
                            "linear",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41665",
                            "-o-transform-origin",
                            1364,
                            0,
                            "linear",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41666",
                            "transform-origin",
                            1364,
                            0,
                            "linear",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid15247",
                            "-webkit-transform-origin",
                            2666,
                            0,
                            "swing",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41667",
                            "-moz-transform-origin",
                            2666,
                            0,
                            "swing",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41668",
                            "-ms-transform-origin",
                            2666,
                            0,
                            "swing",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41669",
                            "msTransformOrigin",
                            2666,
                            0,
                            "swing",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41670",
                            "-o-transform-origin",
                            2666,
                            0,
                            "swing",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41671",
                            "transform-origin",
                            2666,
                            0,
                            "swing",
                            "${rope}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid15248",
                            "scaleX",
                            2666,
                            0,
                            "swing",
                            "${rope}",
                            '1',
                            '1'
                        ],
                        [
                            "eid15214",
                            "top",
                            57,
                            0,
                            "linear",
                            "${zombie}",
                            '65px',
                            '65px'
                        ],
                        [
                            "eid15228",
                            "top",
                            1364,
                            0,
                            "linear",
                            "${zombie}",
                            '65px',
                            '65px'
                        ],
                        [
                            "eid15243",
                            "top",
                            2666,
                            0,
                            "swing",
                            "${zombie}",
                            '65px',
                            '65px'
                        ],
                        [
                            "eid15262",
                            "top",
                            3166,
                            334,
                            "linear",
                            "${zombie}",
                            '65px',
                            '377px'
                        ],
                        [
                            "eid15475",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${zombie}",
                            '377px',
                            '935px'
                        ],
                        [
                            "eid15223",
                            "rotateZ",
                            57,
                            250,
                            "swing",
                            "${zombie}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid15224",
                            "rotateZ",
                            307,
                            250,
                            "swing",
                            "${zombie}",
                            '15deg',
                            '-10deg'
                        ],
                        [
                            "eid15225",
                            "rotateZ",
                            557,
                            250,
                            "swing",
                            "${zombie}",
                            '-10deg',
                            '5deg'
                        ],
                        [
                            "eid15226",
                            "rotateZ",
                            807,
                            250,
                            "swing",
                            "${zombie}",
                            '5deg',
                            '-3deg'
                        ],
                        [
                            "eid15227",
                            "rotateZ",
                            1057,
                            250,
                            "swing",
                            "${zombie}",
                            '-3deg',
                            '0deg'
                        ],
                        [
                            "eid15231",
                            "rotateZ",
                            1364,
                            250,
                            "swing",
                            "${zombie}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid15232",
                            "rotateZ",
                            1614,
                            250,
                            "swing",
                            "${zombie}",
                            '15deg',
                            '-10deg'
                        ],
                        [
                            "eid15233",
                            "rotateZ",
                            1864,
                            250,
                            "swing",
                            "${zombie}",
                            '-10deg',
                            '5deg'
                        ],
                        [
                            "eid15234",
                            "rotateZ",
                            2114,
                            250,
                            "swing",
                            "${zombie}",
                            '5deg',
                            '-3deg'
                        ],
                        [
                            "eid15235",
                            "rotateZ",
                            2364,
                            250,
                            "swing",
                            "${zombie}",
                            '-3deg',
                            '0deg'
                        ],
                        [
                            "eid15250",
                            "rotateZ",
                            2666,
                            250,
                            "swing",
                            "${zombie}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid15251",
                            "rotateZ",
                            2916,
                            250,
                            "swing",
                            "${zombie}",
                            '15deg',
                            '-10deg'
                        ],
                        [
                            "eid15252",
                            "rotateZ",
                            3166,
                            250,
                            "swing",
                            "${zombie}",
                            '-10deg',
                            '10deg'
                        ],
                        [
                            "eid15270",
                            "rotateZ",
                            3416,
                            584,
                            "swing",
                            "${zombie}",
                            '10deg',
                            '25deg'
                        ],
                        [
                            "eid15213",
                            "left",
                            57,
                            0,
                            "linear",
                            "${zombie}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid15230",
                            "left",
                            1364,
                            0,
                            "linear",
                            "${zombie}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid15242",
                            "left",
                            2666,
                            0,
                            "swing",
                            "${zombie}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid15261",
                            "left",
                            3166,
                            334,
                            "linear",
                            "${zombie}",
                            '0px',
                            '-130px'
                        ],
                        [
                            "eid15474",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${zombie}",
                            '-130px',
                            '-194px'
                        ],
                        [
                            "eid15249",
                            "scaleY",
                            2666,
                            0,
                            "swing",
                            "${rope}",
                            '1',
                            '1'
                        ],
                        [
                            "eid15257",
                            "scaleY",
                            3166,
                            250,
                            "easeOutBack",
                            "${rope}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid15258",
                            "scaleY",
                            3416,
                            181,
                            "easeOutBack",
                            "${rope}",
                            '0.8',
                            '1'
                        ]
                    ]
                }
            },
            "puzzle7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'puzzle_7',
                            type: 'image',
                            rect: ['0px', '228px', '70px', '70px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_7.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "mugAn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['30px', '-207px', '70px', '70px', 'auto', 'auto'],
                            id: 'puzzle_7',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_7.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'mug',
                            rect: ['0px', '0px', '157px', '88px', 'auto', 'auto'],
                            transform: [[], ['-50'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/scene4/mug.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '157px', '88px', 'auto', 'auto'],
                            display: 'block',
                            id: 'touch1',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '157px', '88px', 'auto', 'auto'],
                            display: 'none',
                            id: 'touch2',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['-186px', '0px', '157px', '88px', 'auto', 'auto'],
                            display: 'none',
                            id: 'touch3',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '157px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    labels: {
                        "swing_mug": 250,
                        "puzzle_in": 2250,
                        "puzzle_out": 3000,
                        "end": 4500
                    },
                    data: [
                        [
                            "eid15511",
                            "display",
                            3625,
                            0,
                            "easeOutBounce",
                            "${touch3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid15515",
                            "display",
                            4385,
                            0,
                            "easeOutBounce",
                            "${touch3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid15512",
                            "display",
                            289,
                            0,
                            "easeOutBounce",
                            "${touch1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid15504",
                            "rotateZ",
                            3000,
                            0,
                            "easeOutBounce",
                            "${puzzle_7}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid15471",
                            "display",
                            2250,
                            0,
                            "easeOutBounce",
                            "${puzzle_7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid15516",
                            "display",
                            4385,
                            0,
                            "easeOutBounce",
                            "${puzzle_7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid15479",
                            "location",
                            250,
                            500,
                            "easeOutQuad",
                            "${mug}",
                            [[78.5, 44, 0, 0, 0, 0,0],[30.5, -38, 0, 0, 0, 0,95.02]]
                        ],
                        [
                            "eid15494",
                            "location",
                            1500,
                            250,
                            "easeOutQuad",
                            "${mug}",
                            [[30.5, -38, 0, 0, 0, 0,0],[78.5, 44, 0, 0, 0, 0,95.02]]
                        ],
                        [
                            "eid15498",
                            "location",
                            3000,
                            500,
                            "easeOutQuad",
                            "${mug}",
                            [[78.5, 44, 0, 0, 0, 0,0],[30.5, -38, 0, 0, 0, 0,95.02]]
                        ],
                        [
                            "eid15507",
                            "location",
                            4000,
                            250,
                            "easeOutQuad",
                            "${mug}",
                            [[30.5, -38, 0, 0, 0, 0,0],[78.5, 44, 0, 0, 0, 0,95.02]]
                        ],
                        [
                            "eid15478",
                            "rotateZ",
                            250,
                            352,
                            "easeOutQuad",
                            "${mug}",
                            '0deg',
                            '-45deg'
                        ],
                        [
                            "eid15483",
                            "rotateZ",
                            602,
                            148,
                            "easeOutQuad",
                            "${mug}",
                            '-45deg',
                            '-50deg'
                        ],
                        [
                            "eid15484",
                            "rotateZ",
                            750,
                            125,
                            "easeOutQuad",
                            "${mug}",
                            '-50deg',
                            '-40deg'
                        ],
                        [
                            "eid15485",
                            "rotateZ",
                            875,
                            125,
                            "easeOutQuad",
                            "${mug}",
                            '-40deg',
                            '-45deg'
                        ],
                        [
                            "eid15492",
                            "rotateZ",
                            1500,
                            250,
                            "easeOutBounce",
                            "${mug}",
                            '-45deg',
                            '0deg'
                        ],
                        [
                            "eid15499",
                            "rotateZ",
                            3000,
                            352,
                            "easeOutQuad",
                            "${mug}",
                            '0deg',
                            '-45deg'
                        ],
                        [
                            "eid15500",
                            "rotateZ",
                            3352,
                            148,
                            "easeOutQuad",
                            "${mug}",
                            '-45deg',
                            '-50deg'
                        ],
                        [
                            "eid15501",
                            "rotateZ",
                            3500,
                            125,
                            "easeOutQuad",
                            "${mug}",
                            '-50deg',
                            '-40deg'
                        ],
                        [
                            "eid15502",
                            "rotateZ",
                            3625,
                            125,
                            "easeOutQuad",
                            "${mug}",
                            '-40deg',
                            '-45deg'
                        ],
                        [
                            "eid15508",
                            "rotateZ",
                            4000,
                            250,
                            "easeOutBounce",
                            "${mug}",
                            '-45deg',
                            '0deg'
                        ],
                        [
                            "eid15473",
                            "location",
                            2250,
                            500,
                            "easeOutBounce",
                            "${puzzle_7}",
                            [[65, -172, 0, 0, 0, 0,0],[42.76, -72.68, -16.01, 164.64, -15.48, 159.27,101.99],[51, 49, 0, 0, 0, 0,224.27]]
                        ],
                        [
                            "eid15505",
                            "location",
                            3000,
                            1000,
                            "easeOutQuad",
                            "${puzzle_7}",
                            [[51, 49, 0, 0, 0, 0,0],[-35.02, -67.93, -111.47, 7.43, -113.51, 7.57,150.14],[-99, 54, 0, 0, 0, 0,292.95]]
                        ],
                        [
                            "eid15510",
                            "display",
                            2691,
                            0,
                            "easeOutBounce",
                            "${touch2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid15513",
                            "display",
                            3073,
                            0,
                            "easeOutBounce",
                            "${touch2}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "photoS4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '319px', '390px', 'auto', 'auto'],
                            id: 'photo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/photo.png', '0px', '0px']
                        },
                        {
                            rect: ['198px', '132px', '7px', '7px', 'auto', 'auto'],
                            id: 'eyeball2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/eyeball2.png', '0px', '0px']
                        },
                        {
                            rect: ['105px', '137px', '9px', '10px', 'auto', 'auto'],
                            id: 'eyeball1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/eyeball1.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '319px', '390px', 'auto', 'auto'],
                            display: 'block',
                            id: 'touch',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '319px', '390px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    data: [
                        [
                            "eid16409",
                            "left",
                            0,
                            0,
                            "linear",
                            "${eyeball1}",
                            '105px',
                            '105px'
                        ],
                        [
                            "eid16103",
                            "left",
                            250,
                            500,
                            "linear",
                            "${eyeball1}",
                            '105px',
                            '123px'
                        ],
                        [
                            "eid16110",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${eyeball1}",
                            '123px',
                            '105px'
                        ],
                        [
                            "eid16410",
                            "top",
                            0,
                            0,
                            "linear",
                            "${eyeball1}",
                            '137px',
                            '137px'
                        ],
                        [
                            "eid16102",
                            "top",
                            250,
                            500,
                            "linear",
                            "${eyeball1}",
                            '137px',
                            '146px'
                        ],
                        [
                            "eid16111",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${eyeball1}",
                            '146px',
                            '137px'
                        ],
                        [
                            "eid16114",
                            "display",
                            138,
                            0,
                            "linear",
                            "${touch}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16115",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${touch}",
                            '0',
                            '0'
                        ]
                    ]
                }
            },
            "friOpen": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '377px', '674px', 'auto', 'auto'],
                            id: 'fridge_open',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/fridge_open.png', '0px', '0px']
                        },
                        {
                            rect: ['27px', '390px', '70px', '70px', 'auto', 'auto'],
                            id: 'puzzle_8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_8.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '377px', '674px', 'auto', 'auto'],
                            display: 'block',
                            id: 'touch',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '377px', '674px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "end": 500
                    },
                    data: [
                        [
                            "eid16217",
                            "display",
                            138,
                            0,
                            "linear",
                            "${touch}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16213",
                            "display",
                            250,
                            0,
                            "linear",
                            "${fridge_open}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16216",
                            "display",
                            459,
                            0,
                            "linear",
                            "${fridge_open}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16214",
                            "display",
                            250,
                            0,
                            "linear",
                            "${puzzle_8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16215",
                            "display",
                            459,
                            0,
                            "linear",
                            "${puzzle_8}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "caAn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-60px', '139px', '77px', 'auto', 'auto'],
                            id: 'camera',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene4/camera.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '-77px', '139px', '154px', 'auto', 'auto'],
                            display: 'block',
                            id: 'touch',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '139px', '77px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid16610",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${touch}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16603",
                            "top",
                            250,
                            188,
                            "easeOutQuad",
                            "${camera}",
                            '0px',
                            '-60px'
                        ],
                        [
                            "eid16609",
                            "top",
                            813,
                            187,
                            "easeOutQuad",
                            "${camera}",
                            '-60px',
                            '0px'
                        ],
                        [
                            "eid16605",
                            "rotateZ",
                            250,
                            188,
                            "easeOutQuad",
                            "${camera}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid16606",
                            "rotateZ",
                            438,
                            188,
                            "easeOutQuad",
                            "${camera}",
                            '15deg',
                            '-10deg'
                        ],
                        [
                            "eid16607",
                            "rotateZ",
                            625,
                            188,
                            "easeOutQuad",
                            "${camera}",
                            '-10deg',
                            '5deg'
                        ],
                        [
                            "eid16608",
                            "rotateZ",
                            813,
                            187,
                            "easeOutQuad",
                            "${camera}",
                            '5deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "s5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1206px', '1206px', 'auto', 'auto'],
                            id: 'scene1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene5/scene5.jpg', '0px', '0px']
                        },
                        {
                            rect: ['900', '727', '208', '286', 'auto', 'auto'],
                            id: 'roadBlock',
                            symbolName: 'roadBlock',
                            type: 'rect'
                        },
                        {
                            rect: ['618', '895', '222', '191', 'auto', 'auto'],
                            id: 'paperAn',
                            symbolName: 'paperAn',
                            type: 'rect'
                        },
                        {
                            rect: ['370', '811', '277', '297', 'auto', 'auto'],
                            id: 'pizzaBox',
                            symbolName: 'pizzaBox',
                            type: 'rect'
                        },
                        {
                            rect: ['253', '0', '953', '731', 'auto', 'auto'],
                            id: 'doorAn',
                            symbolName: 'doorAn',
                            type: 'rect'
                        },
                        {
                            rect: ['121', '205', '141', '173', 'auto', 'auto'],
                            id: 'capAn',
                            symbolName: 'capAn',
                            type: 'rect'
                        },
                        {
                            rect: ['0', '518', '327', '301', 'auto', 'auto'],
                            id: 'bigBox',
                            symbolName: 'bigBox',
                            type: 'rect'
                        },
                        {
                            rect: ['0px', '590px', '507px', '616px', 'auto', 'auto'],
                            id: 'mummy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene5/mummy.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '518px', '327px', '301px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'touch',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1206px', '1206px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid17402",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${bigBox}",
                            '0px',
                            '-456px'
                        ],
                        [
                            "eid17401",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${capAn}",
                            '121px',
                            '-335px'
                        ],
                        [
                            "eid17399",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${pizzaBox}",
                            '370px',
                            '-86px'
                        ],
                        [
                            "eid17403",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${mummy}",
                            '0px',
                            '-456px'
                        ],
                        [
                            "eid17398",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${paperAn}",
                            '618px',
                            '162px'
                        ],
                        [
                            "eid17404",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${touch}",
                            '0px',
                            '-456px'
                        ],
                        [
                            "eid17397",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${roadBlock}",
                            '900px',
                            '444px'
                        ],
                        [
                            "eid17400",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${doorAn}",
                            '253px',
                            '-203px'
                        ],
                        [
                            "eid27",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${scene1}",
                            '0px',
                            '-456px'
                        ]
                    ]
                }
            },
            "bigBox": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '327px', '301px', 'auto', 'auto'],
                            id: 'bigbox',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene5/bigbox.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '327px', '301px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid16840",
                            "top",
                            250,
                            500,
                            "easeOutBack",
                            "${bigbox}",
                            '0px',
                            '-108px'
                        ],
                        [
                            "eid16842",
                            "top",
                            1250,
                            250,
                            "easeOutBack",
                            "${bigbox}",
                            '-108px',
                            '0px'
                        ]
                    ]
                }
            },
            "capAn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cap',
                            opacity: '1',
                            rect: ['0px', '0px', '141px', '173px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene5/cap.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '141px', '173px', 'auto', 'auto'],
                            display: 'block',
                            id: 'touch1',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '141px', '173px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid16845",
                            "opacity",
                            250,
                            500,
                            "easeOutQuad",
                            "${cap}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16941",
                            "display",
                            114,
                            0,
                            "easeOutQuad",
                            "${touch1}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "doorAn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'door',
                            rect: ['0px', '0px', '953px', '731px', 'auto', 'auto'],
                            transform: [[], ['-2'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/scene5/door.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '953px', '731px', 'auto', 'auto'],
                            display: 'block',
                            id: 'block',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '953px', '731px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid17045",
                            "left",
                            250,
                            500,
                            "easeOutBack",
                            "${door}",
                            '0px',
                            '10px'
                        ],
                        [
                            "eid17046",
                            "left",
                            750,
                            95,
                            "easeOutQuad",
                            "${door}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid17050",
                            "left",
                            845,
                            500,
                            "easeOutBack",
                            "${door}",
                            '0px',
                            '10px'
                        ],
                        [
                            "eid17052",
                            "left",
                            1345,
                            155,
                            "easeOutQuad",
                            "${door}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid17055",
                            "display",
                            142,
                            0,
                            "easeOutBack",
                            "${block}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17040",
                            "top",
                            250,
                            500,
                            "easeOutBack",
                            "${door}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17047",
                            "top",
                            750,
                            95,
                            "easeOutQuad",
                            "${door}",
                            '-10px',
                            '0px'
                        ],
                        [
                            "eid17049",
                            "top",
                            845,
                            500,
                            "easeOutBack",
                            "${door}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid17053",
                            "top",
                            1345,
                            155,
                            "easeOutQuad",
                            "${door}",
                            '-10px',
                            '0px'
                        ],
                        [
                            "eid17044",
                            "rotateZ",
                            250,
                            500,
                            "easeOutBack",
                            "${door}",
                            '0deg',
                            '-2deg'
                        ],
                        [
                            "eid17048",
                            "rotateZ",
                            750,
                            95,
                            "easeOutQuad",
                            "${door}",
                            '-2deg',
                            '0deg'
                        ],
                        [
                            "eid17051",
                            "rotateZ",
                            845,
                            500,
                            "easeOutBack",
                            "${door}",
                            '0deg',
                            '-2deg'
                        ],
                        [
                            "eid17054",
                            "rotateZ",
                            1345,
                            155,
                            "easeOutQuad",
                            "${door}",
                            '-2deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "pizzaBox": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['30px', '10px', '240px', '277px', 'auto', 'auto'],
                            id: 'pizzabox_shadow',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene5/pizzabox_shadow.png', '0px', '0px']
                        },
                        {
                            rect: ['110px', '0px', '167px', '205px', 'auto', 'auto'],
                            id: 'pizzabox',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene5/pizzabox.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '-49px', '277px', '346px', 'auto', 'auto'],
                            display: 'block',
                            id: 'Touch',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '277px', '297px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid17057",
                            "top",
                            250,
                            500,
                            "easeOutBack",
                            "${pizzabox}",
                            '0px',
                            '-30px'
                        ],
                        [
                            "eid17066",
                            "top",
                            1250,
                            250,
                            "easeOutBack",
                            "${pizzabox}",
                            '-30px',
                            '0px'
                        ],
                        [
                            "eid17069",
                            "display",
                            138,
                            0,
                            "easeOutBack",
                            "${Touch}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17059",
                            "width",
                            250,
                            500,
                            "easeOutBack",
                            "${pizzabox_shadow}",
                            '240px',
                            '210px'
                        ],
                        [
                            "eid17068",
                            "width",
                            1250,
                            250,
                            "easeOutBack",
                            "${pizzabox_shadow}",
                            '210px',
                            '240px'
                        ],
                        [
                            "eid17061",
                            "left",
                            250,
                            500,
                            "easeOutBack",
                            "${pizzabox_shadow}",
                            '0px',
                            '30px'
                        ],
                        [
                            "eid17067",
                            "left",
                            1250,
                            250,
                            "easeOutBack",
                            "${pizzabox_shadow}",
                            '30px',
                            '0px'
                        ],
                        [
                            "eid17062",
                            "top",
                            750,
                            0,
                            "easeOutBack",
                            "${pizzabox_shadow}",
                            '10px',
                            '10px'
                        ]
                    ]
                }
            },
            "paperAn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'paper_shadow',
                            rect: ['0px', '38px', '215px', '153px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.7']],
                            fill: ['rgba(0,0,0,0)', 'images/scene5/paper_shadow.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], ['-25'], [1, 1, 1]],
                            rect: ['156px', '1px', '50px', '50px', 'auto', 'auto'],
                            display: 'none',
                            id: 'puzzle_9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/puzzles/puzzle_9.png', '0px', '0px']
                        },
                        {
                            rect: ['93px', '0px', '129px', '102px', 'auto', 'auto'],
                            id: 'paper',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene5/paper.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '222px', '191px', 'auto', 'auto'],
                            display: 'block',
                            id: 'Touch',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['122px', '0px', '100px', '77px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Touch2',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '222px', '191px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    data: [
                        [
                            "eid17690",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Touch2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17101",
                            "display",
                            923,
                            0,
                            "easeOutBack",
                            "${Touch2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17078",
                            "location",
                            250,
                            500,
                            "easeOutQuad",
                            "${paper}",
                            [[157.5, 51, 0, 0, 0, 0,0],[266.31, -54.92, 127.97, -273.1, 117.6, -250.97,155.47],[395.5, -407, 0, 0, 0, 0,530.63]]
                        ],
                        [
                            "eid17095",
                            "top",
                            250,
                            500,
                            "easeOutBack",
                            "${puzzle_9}",
                            '31px',
                            '1px'
                        ],
                        [
                            "eid17079",
                            "scaleY",
                            250,
                            500,
                            "easeOutQuad",
                            "${paper}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid17097",
                            "rotateZ",
                            250,
                            500,
                            "easeOutBack",
                            "${puzzle_9}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid17096",
                            "left",
                            250,
                            500,
                            "easeOutBack",
                            "${puzzle_9}",
                            '126px',
                            '156px'
                        ],
                        [
                            "eid17081",
                            "rotateZ",
                            250,
                            500,
                            "easeOutQuad",
                            "${paper}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid17091",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${puzzle_9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17200",
                            "display",
                            1250,
                            0,
                            "easeOutBack",
                            "${puzzle_9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17087",
                            "scaleY",
                            250,
                            500,
                            "easeOutQuad",
                            "${paper_shadow}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid17086",
                            "scaleX",
                            250,
                            500,
                            "easeOutQuad",
                            "${paper_shadow}",
                            '1',
                            '0.7'
                        ],
                        [
                            "eid17102",
                            "height",
                            923,
                            0,
                            "easeOutBack",
                            "${Touch2}",
                            '77px',
                            '77px'
                        ],
                        [
                            "eid17080",
                            "scaleX",
                            250,
                            500,
                            "easeOutQuad",
                            "${paper}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid17103",
                            "left",
                            923,
                            0,
                            "easeOutBack",
                            "${Touch2}",
                            '122px',
                            '122px'
                        ],
                        [
                            "eid17099",
                            "skewX",
                            750,
                            0,
                            "easeOutBack",
                            "${puzzle_9}",
                            '-25deg',
                            '-25deg'
                        ],
                        [
                            "eid17089",
                            "location",
                            250,
                            750,
                            "easeOutQuad",
                            "${paper_shadow}",
                            [[107.5, 114.5, 0, 0, 0, 0,0],[247.64, -11.23, 144.8, -162.27, 144.32, -161.73,188.46],[534.25, -278.75, 0, 0, 0, 0,580.6]]
                        ],
                        [
                            "eid17090",
                            "display",
                            130,
                            0,
                            "easeOutQuad",
                            "${Touch}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17088",
                            "rotateZ",
                            250,
                            500,
                            "easeOutQuad",
                            "${paper_shadow}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid17104",
                            "width",
                            923,
                            0,
                            "easeOutBack",
                            "${Touch2}",
                            '100px',
                            '100px'
                        ]
                    ]
                }
            },
            "roadBlock": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '208px', '286px', 'auto', 'auto'],
                            id: 'roadblock',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scene5/roadblock.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '208px', '286px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid17297",
                            "rotateZ",
                            250,
                            250,
                            "easeOutQuad",
                            "${roadblock}",
                            '0deg',
                            '7deg'
                        ],
                        [
                            "eid17298",
                            "rotateZ",
                            500,
                            250,
                            "easeOutQuad",
                            "${roadblock}",
                            '7deg',
                            '-5deg'
                        ],
                        [
                            "eid17299",
                            "rotateZ",
                            750,
                            250,
                            "easeOutQuad",
                            "${roadblock}",
                            '-5deg',
                            '3deg'
                        ],
                        [
                            "eid17300",
                            "rotateZ",
                            1000,
                            250,
                            "easeOutQuad",
                            "${roadblock}",
                            '3deg',
                            '-1deg'
                        ],
                        [
                            "eid17301",
                            "rotateZ",
                            1250,
                            250,
                            "easeOutQuad",
                            "${roadblock}",
                            '-1deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "winPop": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'pop',
                            rect: ['0px', '-935px', '730px', '861px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/end/pop.png', '0px', '0px']
                        },
                        {
                            rect: ['166', '-294px', '397', '136', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'lockBtn',
                            id: 'lockBtn',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '730px', '861px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid19212",
                            "scaleY",
                            0,
                            500,
                            "easeOutBack",
                            "${pop}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19219",
                            "scaleY",
                            200,
                            300,
                            "easeOutBack",
                            "${lockBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19214",
                            "top",
                            0,
                            500,
                            "easeOutBack",
                            "${pop}",
                            '80px',
                            '0px'
                        ],
                        [
                            "eid22480",
                            "top",
                            750,
                            250,
                            "easeOutQuad",
                            "${pop}",
                            '0px',
                            '-935px'
                        ],
                        [
                            "eid19221",
                            "display",
                            200,
                            0,
                            "easeOutBack",
                            "${lockBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid19213",
                            "scaleX",
                            0,
                            500,
                            "easeOutBack",
                            "${pop}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19220",
                            "top",
                            200,
                            300,
                            "easeOutBack",
                            "${lockBtn}",
                            '719px',
                            '641px'
                        ],
                        [
                            "eid22479",
                            "top",
                            750,
                            250,
                            "easeOutQuad",
                            "${lockBtn}",
                            '641px',
                            '-294px'
                        ],
                        [
                            "eid19218",
                            "scaleX",
                            200,
                            300,
                            "easeOutBack",
                            "${lockBtn}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "lockBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'lock',
                            rect: ['0px', '0px', '397px', '136px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/end/lock.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '397px', '136px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid19224",
                            "scaleX",
                            0,
                            125,
                            "easeOutQuad",
                            "${lock}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid19226",
                            "scaleX",
                            125,
                            125,
                            "easeOutQuad",
                            "${lock}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid19225",
                            "scaleY",
                            0,
                            125,
                            "easeOutQuad",
                            "${lock}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid19227",
                            "scaleY",
                            125,
                            125,
                            "easeOutQuad",
                            "${lock}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            },
            "losePop": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['10px', '-464px', '729px', '1014px', 'auto', 'auto'],
                            type: 'image',
                            id: 'rule',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/end/lose.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'loseBtn',
                            rect: ['200px', '972px', null, null, 'auto', 'auto'],
                            id: 'loseBtn'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'chouBtn',
                            rect: ['200px', '906px', undefined, undefined, 'auto', 'auto'],
                            id: 'chouBtn'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '750px', '1206px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    labels: {
                        "in": 250,
                        "out": 1250
                    },
                    data: [
                        [
                            "eid2290",
                            "opacity",
                            250,
                            0,
                            "easeOutQuad",
                            "${rule}",
                            '1',
                            '1'
                        ],
                        [
                            "eid20093",
                            "opacity",
                            1250,
                            250,
                            "easeOutQuad",
                            "${rule}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1367",
                            "top",
                            250,
                            500,
                            "easeOutBack",
                            "${rule}",
                            '1206px',
                            '52px'
                        ],
                        [
                            "eid1369",
                            "top",
                            1250,
                            250,
                            "easeOutQuad",
                            "${rule}",
                            '52px',
                            '-464px'
                        ],
                        [
                            "eid20094",
                            "left",
                            750,
                            0,
                            "easeOutQuad",
                            "${loseBtn}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid41015",
                            "left",
                            750,
                            0,
                            "linear",
                            "${chouBtn}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid20096",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${loseBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20097",
                            "opacity",
                            250,
                            0,
                            "easeOutQuad",
                            "${loseBtn}",
                            '1',
                            '1'
                        ],
                        [
                            "eid20100",
                            "opacity",
                            1250,
                            250,
                            "easeOutQuad",
                            "${loseBtn}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1397",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${rule}",
                            'none',
                            'block'
                        ],
                        [
                            "eid41356",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${chouBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid41025",
                            "opacity",
                            1250,
                            250,
                            "easeOutQuad",
                            "${chouBtn}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20098",
                            "top",
                            250,
                            500,
                            "easeOutBack",
                            "${loseBtn}",
                            '2126px',
                            '1033px'
                        ],
                        [
                            "eid20099",
                            "top",
                            1250,
                            250,
                            "easeOutQuad",
                            "${loseBtn}",
                            '1033px',
                            '456px'
                        ],
                        [
                            "eid41023",
                            "top",
                            250,
                            500,
                            "easeOutBack",
                            "${chouBtn}",
                            '1999px',
                            '906px'
                        ],
                        [
                            "eid41024",
                            "top",
                            1250,
                            250,
                            "easeOutQuad",
                            "${chouBtn}",
                            '906px',
                            '329px'
                        ]
                    ]
                }
            },
            "loseBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'start',
                            rect: ['0px', '0px', '350px', '106px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/end/again.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '106px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid1459",
                            "scaleY",
                            0,
                            125,
                            "easeOutQuad",
                            "${start}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1460",
                            "scaleY",
                            125,
                            125,
                            "easeOutQuad",
                            "${start}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1461",
                            "scaleX",
                            0,
                            125,
                            "easeOutQuad",
                            "${start}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1462",
                            "scaleX",
                            125,
                            125,
                            "easeOutQuad",
                            "${start}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            },
            "End": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'end',
                            rect: ['0px', '0px', '750px', '1206px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/end/end.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '1035px', '750px', '461px', 'auto', 'auto'],
                            id: 'fg2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/end/fg2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '514px', '750px', '1206px', 'auto', 'auto'],
                            id: 'fg',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/end/fg.png', '0px', '0px']
                        },
                        {
                            rect: ['214px', '80px', '322px', '417px', 'auto', 'auto'],
                            type: 'image',
                            id: 'ballon',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/end/ballon.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['1', '0']],
                            display: 'none',
                            rect: ['0px', '265px', '750px', '667px', 'auto', 'auto'],
                            id: 'bigbanner',
                            fill: ['rgba(0,0,0,0)', 'images/end/bigbanner.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'time',
                            rect: ['210px', '570px', '330px', '105px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/end/time.png', '0px', '0px']
                        },
                        {
                            rect: ['336px', '587px', '218px', '81px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [60, 'px'], 'rgba(255,255,255,1.00)', '900', 'none', '', 'break-word', 'normal'],
                            id: 'timeText',
                            text: '<p style=\"margin: 0px;\">​04:59</p>',
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 0],
                            type: 'text'
                        },
                        {
                            rect: ['232px', '336px', '285px', '51px', 'auto', 'auto'],
                            id: 'result',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/end/result.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'shBtn',
                            symbolName: 'shBtn',
                            rect: ['237', '918', '275', '85', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'giBtn',
                            symbolName: 'giBtn',
                            rect: ['175', '762', '400', '125', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '0px', '750px', '514px', 'auto', 'auto'],
                            id: 'Banner',
                            transform: [[], [], [], ['1', '1.2']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/Banner.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0', '0']],
                            display: 'none',
                            rect: ['114px', '204px', '522px', '192px', 'auto', 'auto'],
                            id: 'logo',
                            fill: ['rgba(0,0,0,0)', 'images/end/logo.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], ['25'], [], ['0', '0']],
                            display: 'none',
                            rect: ['-228px', '178px', '1206px', '1206px', 'auto', 'auto'],
                            id: 'spline',
                            fill: ['rgba(0,0,0,0)', 'images/ui/spline.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'roundlight',
                            rect: ['44px', '405px', '662px', '752px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ui/roundlight.png', '0px', '0px']
                        },
                        {
                            rect: ['90px', '476px', '570px', '610px', 'auto', 'auto'],
                            id: 'sparkle',
                            transform: [[], [], [], ['0.9', '0.9']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ui/sparkle.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'keyZombie',
                            rect: ['163px', '546px', '424px', '584px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/end/keyZombie.png', '0px', '0px']
                        },
                        {
                            rect: ['79px', '649px', '592px', '263px', 'auto', 'auto'],
                            id: 'roundPanel',
                            transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/roundPanel.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'SURPRISE_shadow',
                            rect: ['59px', '670px', '632px', '190px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/end/SURPRISE_shadow.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'SURPRISE',
                            rect: ['41px', '685px', '668px', '192px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/end/SURPRISE.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1.17188', '1.17188']],
                            type: 'rect',
                            display: 'none',
                            symbolName: 'shareall',
                            rect: ['55px', '111px', null, null, 'auto', 'auto'],
                            id: 'shareall'
                        },
                        {
                            rect: ['0', '0', '750', '1206', 'auto', 'auto'],
                            id: 'shPop',
                            symbolName: 'shPop',
                            type: 'rect',
                            display: 'none'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 10250,
                    autoPlay: false,
                    data: [
                        [
                            "eid20925",
                            "display",
                            500,
                            0,
                            "easeOutQuad",
                            "${SURPRISE_shadow}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20996",
                            "display",
                            3250,
                            0,
                            "easeOutQuad",
                            "${SURPRISE_shadow}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20976",
                            "top",
                            3000,
                            0,
                            "easeOutQuad",
                            "${roundlight}",
                            '405px',
                            '405px'
                        ],
                        [
                            "eid20990",
                            "top",
                            3250,
                            0,
                            "easeOutQuad",
                            "${roundlight}",
                            '405px',
                            '405px'
                        ],
                        [
                            "eid20972",
                            "top",
                            3000,
                            0,
                            "easeOutQuad",
                            "${SURPRISE}",
                            '685px',
                            '685px'
                        ],
                        [
                            "eid20985",
                            "top",
                            3250,
                            0,
                            "easeOutQuad",
                            "${SURPRISE}",
                            '685px',
                            '685px'
                        ],
                        [
                            "eid20873",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${Banner}",
                            '0.5',
                            '1.2'
                        ],
                        [
                            "eid20874",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${Banner}",
                            '1.2',
                            '0.9'
                        ],
                        [
                            "eid20875",
                            "scaleY",
                            500,
                            250,
                            "easeOutQuad",
                            "${Banner}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid21370",
                            "top",
                            10000,
                            0,
                            "easeOutQuad",
                            "${shareall}",
                            '111px',
                            '111px'
                        ],
                        [
                            "eid25475",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${shPop}",
                            'none',
                            'none'
                        ],
                        [
                            "eid20872",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Banner}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41672",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Banner}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41673",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Banner}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41674",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Banner}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41675",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Banner}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41676",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Banner}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid20893",
                            "top",
                            250,
                            250,
                            "easeOutBack",
                            "${ballon}",
                            '80px',
                            '0px'
                        ],
                        [
                            "eid20910",
                            "scaleX",
                            337,
                            500,
                            "easeOutQuad",
                            "${sparkle}",
                            '0',
                            '0.9'
                        ],
                        [
                            "eid20913",
                            "scaleX",
                            837,
                            2163,
                            "linear",
                            "${sparkle}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid20963",
                            "scaleX",
                            3000,
                            250,
                            "easeOutQuad",
                            "${sparkle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20923",
                            "scaleY",
                            500,
                            500,
                            "easeOutBack",
                            "${SURPRISE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20960",
                            "scaleY",
                            3000,
                            250,
                            "easeOutQuad",
                            "${SURPRISE}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20922",
                            "display",
                            500,
                            0,
                            "easeOutQuad",
                            "${SURPRISE}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20995",
                            "display",
                            3250,
                            0,
                            "easeOutQuad",
                            "${SURPRISE}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21364",
                            "scaleX",
                            10000,
                            0,
                            "easeOutQuad",
                            "${shareall}",
                            '1.17188',
                            '1.17188'
                        ],
                        [
                            "eid20965",
                            "left",
                            3000,
                            0,
                            "easeOutQuad",
                            "${SURPRISE}",
                            '41px',
                            '41px'
                        ],
                        [
                            "eid20978",
                            "left",
                            3250,
                            0,
                            "easeOutQuad",
                            "${SURPRISE}",
                            '41px',
                            '41px'
                        ],
                        [
                            "eid20912",
                            "display",
                            337,
                            0,
                            "easeOutQuad",
                            "${sparkle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20999",
                            "display",
                            3250,
                            0,
                            "easeOutQuad",
                            "${sparkle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21239",
                            "top",
                            3250,
                            500,
                            "easeOutBack",
                            "${shBtn}",
                            '775px',
                            '918px'
                        ],
                        [
                            "eid20936",
                            "scaleY",
                            459,
                            500,
                            "easeOutBack",
                            "${keyZombie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20956",
                            "scaleY",
                            3000,
                            250,
                            "easeOutQuad",
                            "${keyZombie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20916",
                            "scaleY",
                            337,
                            500,
                            "easeOutBack",
                            "${roundPanel}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20952",
                            "scaleY",
                            3000,
                            250,
                            "easeOutQuad",
                            "${roundPanel}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20886",
                            "display",
                            128,
                            0,
                            "easeOutQuad",
                            "${logo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20935",
                            "display",
                            459,
                            0,
                            "easeOutQuad",
                            "${keyZombie}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20998",
                            "display",
                            3250,
                            0,
                            "easeOutQuad",
                            "${keyZombie}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21812",
                            "display",
                            250,
                            0,
                            "easeOutBack",
                            "${ballon}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20885",
                            "top",
                            128,
                            622,
                            "easeOutBack",
                            "${logo}",
                            '204px',
                            '224px'
                        ],
                        [
                            "eid20888",
                            "scaleY",
                            128,
                            622,
                            "easeOutBack",
                            "${logo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21231",
                            "top",
                            3000,
                            500,
                            "easeOutBack",
                            "${result}",
                            '336px',
                            '479px'
                        ],
                        [
                            "eid21114",
                            "scaleY",
                            3000,
                            500,
                            "easeOutBack",
                            "${bigbanner}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20907",
                            "scaleX",
                            250,
                            384,
                            "easeOutQuad",
                            "${roundlight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20953",
                            "scaleX",
                            3000,
                            250,
                            "easeOutQuad",
                            "${roundlight}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20973",
                            "top",
                            3000,
                            0,
                            "easeOutQuad",
                            "${roundPanel}",
                            '649px',
                            '649px'
                        ],
                        [
                            "eid20987",
                            "top",
                            3250,
                            0,
                            "easeOutQuad",
                            "${roundPanel}",
                            '649px',
                            '649px'
                        ],
                        [
                            "eid20968",
                            "left",
                            3000,
                            0,
                            "easeOutQuad",
                            "${keyZombie}",
                            '163px',
                            '163px'
                        ],
                        [
                            "eid20981",
                            "left",
                            3250,
                            0,
                            "easeOutQuad",
                            "${keyZombie}",
                            '163px',
                            '163px'
                        ],
                        [
                            "eid21365",
                            "scaleY",
                            10000,
                            0,
                            "easeOutQuad",
                            "${shareall}",
                            '1.17188',
                            '1.17188'
                        ],
                        [
                            "eid20903",
                            "scaleY",
                            250,
                            500,
                            "easeOutBack",
                            "${spline}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20962",
                            "scaleY",
                            3000,
                            250,
                            "easeOutQuad",
                            "${spline}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21234",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${timeText}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20924",
                            "rotateZ",
                            500,
                            500,
                            "easeOutBack",
                            "${SURPRISE}",
                            '45deg',
                            '0deg'
                        ],
                        [
                            "eid20920",
                            "rotateZ",
                            337,
                            500,
                            "easeOutBack",
                            "${roundPanel}",
                            '45deg',
                            '0deg'
                        ],
                        [
                            "eid20926",
                            "scaleX",
                            500,
                            500,
                            "easeOutBack",
                            "${SURPRISE_shadow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20957",
                            "scaleX",
                            3000,
                            250,
                            "easeOutQuad",
                            "${SURPRISE_shadow}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20896",
                            "opacity",
                            250,
                            250,
                            "easeOutBack",
                            "${ballon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20904",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${spline}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20994",
                            "display",
                            3250,
                            0,
                            "easeOutQuad",
                            "${spline}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20878",
                            "top",
                            0,
                            1000,
                            "easeOutQuad",
                            "${fg}",
                            '50px',
                            '10px'
                        ],
                        [
                            "eid20897",
                            "top",
                            1000,
                            2000,
                            "linear",
                            "${fg}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid21106",
                            "top",
                            3000,
                            250,
                            "easeOutCubic",
                            "${fg}",
                            '0px',
                            '514px'
                        ],
                        [
                            "eid21235",
                            "top",
                            3000,
                            500,
                            "easeOutBack",
                            "${time}",
                            '427px',
                            '570px'
                        ],
                        [
                            "eid20890",
                            "-webkit-transform-origin",
                            128,
                            0,
                            "easeOutBack",
                            "${logo}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41677",
                            "-moz-transform-origin",
                            128,
                            0,
                            "easeOutBack",
                            "${logo}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41678",
                            "-ms-transform-origin",
                            128,
                            0,
                            "easeOutBack",
                            "${logo}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41679",
                            "msTransformOrigin",
                            128,
                            0,
                            "easeOutBack",
                            "${logo}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41680",
                            "-o-transform-origin",
                            128,
                            0,
                            "easeOutBack",
                            "${logo}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41681",
                            "transform-origin",
                            128,
                            0,
                            "easeOutBack",
                            "${logo}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid21366",
                            "left",
                            10000,
                            0,
                            "easeOutQuad",
                            "${shareall}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid20866",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Banner}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid20867",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Banner}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid21240",
                            "top",
                            3106,
                            500,
                            "easeOutBack",
                            "${giBtn}",
                            '619px',
                            '762px'
                        ],
                        [
                            "eid21107",
                            "top",
                            3000,
                            0,
                            "easeOutCubic",
                            "${bigbanner}",
                            '265px',
                            '265px'
                        ],
                        [
                            "eid21117",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${fg2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20908",
                            "scaleY",
                            250,
                            384,
                            "easeOutQuad",
                            "${roundlight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20954",
                            "scaleY",
                            3000,
                            250,
                            "easeOutQuad",
                            "${roundlight}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21232",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${result}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20921",
                            "scaleX",
                            500,
                            500,
                            "easeOutBack",
                            "${SURPRISE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20959",
                            "scaleX",
                            3000,
                            250,
                            "easeOutQuad",
                            "${SURPRISE}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21923",
                            "width",
                            3000,
                            0,
                            "linear",
                            "${timeText}",
                            '218px',
                            '218px'
                        ],
                        [
                            "eid20967",
                            "left",
                            3000,
                            0,
                            "easeOutQuad",
                            "${roundPanel}",
                            '79px',
                            '79px'
                        ],
                        [
                            "eid20980",
                            "left",
                            3250,
                            0,
                            "easeOutQuad",
                            "${roundPanel}",
                            '79px',
                            '79px'
                        ],
                        [
                            "eid20917",
                            "display",
                            337,
                            0,
                            "easeOutQuad",
                            "${roundPanel}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20997",
                            "display",
                            3250,
                            0,
                            "easeOutQuad",
                            "${roundPanel}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20911",
                            "scaleY",
                            337,
                            500,
                            "easeOutQuad",
                            "${sparkle}",
                            '0',
                            '0.9'
                        ],
                        [
                            "eid20914",
                            "scaleY",
                            837,
                            2163,
                            "linear",
                            "${sparkle}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid20964",
                            "scaleY",
                            3000,
                            250,
                            "easeOutQuad",
                            "${sparkle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20932",
                            "top",
                            500,
                            500,
                            "easeOutQuad",
                            "${SURPRISE_shadow}",
                            '680px',
                            '710px'
                        ],
                        [
                            "eid20933",
                            "top",
                            1000,
                            2000,
                            "linear",
                            "${SURPRISE_shadow}",
                            '710px',
                            '720px'
                        ],
                        [
                            "eid20993",
                            "top",
                            3000,
                            250,
                            "linear",
                            "${SURPRISE_shadow}",
                            '720px',
                            '670px'
                        ],
                        [
                            "eid20887",
                            "scaleX",
                            128,
                            622,
                            "easeOutBack",
                            "${logo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22034",
                            "left",
                            10250,
                            0,
                            "linear",
                            "${timeText}",
                            '336px',
                            '336px'
                        ],
                        [
                            "eid20927",
                            "scaleY",
                            500,
                            500,
                            "easeOutBack",
                            "${SURPRISE_shadow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20958",
                            "scaleY",
                            3000,
                            250,
                            "easeOutQuad",
                            "${SURPRISE_shadow}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21238",
                            "display",
                            3106,
                            0,
                            "easeOutCubic",
                            "${giBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21236",
                            "top",
                            3000,
                            500,
                            "easeOutBack",
                            "${timeText}",
                            '444px',
                            '587px'
                        ],
                        [
                            "eid22035",
                            "top",
                            3500,
                            6750,
                            "linear",
                            "${timeText}",
                            '587px',
                            '580px'
                        ],
                        [
                            "eid20970",
                            "left",
                            3000,
                            0,
                            "easeOutQuad",
                            "${roundlight}",
                            '44px',
                            '44px'
                        ],
                        [
                            "eid20983",
                            "left",
                            3250,
                            0,
                            "easeOutQuad",
                            "${roundlight}",
                            '44px',
                            '44px'
                        ],
                        [
                            "eid21108",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${bigbanner}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20928",
                            "rotateZ",
                            500,
                            500,
                            "easeOutBack",
                            "${SURPRISE_shadow}",
                            '45deg',
                            '0deg'
                        ],
                        [
                            "eid21112",
                            "-webkit-transform-origin",
                            3000,
                            0,
                            "easeOutCubic",
                            "${bigbanner}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41682",
                            "-moz-transform-origin",
                            3000,
                            0,
                            "easeOutCubic",
                            "${bigbanner}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41683",
                            "-ms-transform-origin",
                            3000,
                            0,
                            "easeOutCubic",
                            "${bigbanner}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41684",
                            "msTransformOrigin",
                            3000,
                            0,
                            "easeOutCubic",
                            "${bigbanner}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41685",
                            "-o-transform-origin",
                            3000,
                            0,
                            "easeOutCubic",
                            "${bigbanner}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid41686",
                            "transform-origin",
                            3000,
                            0,
                            "easeOutCubic",
                            "${bigbanner}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid20906",
                            "rotateZ",
                            250,
                            3000,
                            "linear",
                            "${spline}",
                            '0deg',
                            '25deg'
                        ],
                        [
                            "eid20934",
                            "scaleX",
                            459,
                            500,
                            "easeOutBack",
                            "${keyZombie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20955",
                            "scaleX",
                            3000,
                            250,
                            "easeOutQuad",
                            "${keyZombie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20915",
                            "scaleX",
                            337,
                            500,
                            "easeOutBack",
                            "${roundPanel}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20951",
                            "scaleX",
                            3000,
                            250,
                            "easeOutQuad",
                            "${roundPanel}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20902",
                            "scaleX",
                            250,
                            500,
                            "easeOutBack",
                            "${spline}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20961",
                            "scaleX",
                            3000,
                            250,
                            "easeOutQuad",
                            "${spline}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20938",
                            "rotateZ",
                            459,
                            500,
                            "easeOutBack",
                            "${keyZombie}",
                            '-45deg',
                            '0deg'
                        ],
                        [
                            "eid21233",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${time}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21118",
                            "top",
                            3000,
                            250,
                            "easeOutCubic",
                            "${fg2}",
                            '1035px',
                            '745px'
                        ],
                        [
                            "eid21371",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${shareall}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21237",
                            "display",
                            3250,
                            0,
                            "easeOutCubic",
                            "${shBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21111",
                            "scaleX",
                            3000,
                            0,
                            "easeOutCubic",
                            "${bigbanner}",
                            '1',
                            '1'
                        ],
                        [
                            "eid20992",
                            "top",
                            3000,
                            250,
                            "linear",
                            "${keyZombie}",
                            '336px',
                            '546px'
                        ],
                        [
                            "eid21241",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${fg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20909",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${roundlight}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21000",
                            "display",
                            3250,
                            0,
                            "easeOutQuad",
                            "${roundlight}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20864",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Banner}",
                            '1',
                            '1'
                        ],
                        [
                            "eid20868",
                            "scaleX",
                            250,
                            0,
                            "linear",
                            "${Banner}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "shBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'share',
                            rect: ['0px', '0px', '275px', '85px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/end/share.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '275px', '85px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid21248",
                            "scaleY",
                            0,
                            125,
                            "easeOutQuad",
                            "${share}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid21249",
                            "scaleY",
                            125,
                            125,
                            "easeOutQuad",
                            "${share}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid21250",
                            "scaleX",
                            0,
                            125,
                            "easeOutQuad",
                            "${share}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid21251",
                            "scaleX",
                            125,
                            125,
                            "easeOutQuad",
                            "${share}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            },
            "giBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '400px', '125px', 'auto', 'auto'],
                            id: 'gift',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/end/gift.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '400px', '125px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid21245",
                            "scaleY",
                            0,
                            125,
                            "easeOutQuad",
                            "${gift}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid21247",
                            "scaleY",
                            125,
                            125,
                            "easeOutQuad",
                            "${gift}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid21244",
                            "scaleX",
                            0,
                            125,
                            "easeOutQuad",
                            "${gift}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid21246",
                            "scaleX",
                            125,
                            125,
                            "easeOutQuad",
                            "${gift}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            },
            "yxBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '111px', '148px', 'auto', 'auto'],
                            id: 'weixin',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/renren.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '111px', '148px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid309",
                            "scaleX",
                            0,
                            125,
                            "easeOutQuad",
                            "${weixin}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid311",
                            "scaleX",
                            125,
                            125,
                            "easeOutQuad",
                            "${weixin}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid310",
                            "scaleY",
                            0,
                            125,
                            "easeOutQuad",
                            "${weixin}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid312",
                            "scaleY",
                            125,
                            125,
                            "easeOutQuad",
                            "${weixin}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            },
            "shareall": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-50px', '640px', '1088px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'shadow',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'panel',
                            rect: ['-1px', '1008px', '642px', '422px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/panel.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            symbolName: 'wxBtn',
                            display: 'none',
                            opacity: '0',
                            rect: ['102px', '716px', '111', '148', 'auto', 'auto'],
                            id: 'wbBtn'
                        },
                        {
                            type: 'rect',
                            id: 'rrBtn',
                            symbolName: 'yxBtn',
                            rect: ['267px', '696', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'dbBtn',
                            symbolName: 'wbBtn',
                            rect: ['432px', '696', null, null, 'auto', 'auto']
                        },
                        {
                            rect: ['-9px', '888px', '658px', '128px', 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'cancel',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(0,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '640px', '1008px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: false,
                    labels: {
                        "in": 0,
                        "out": 1500
                    },
                    data: [
                        [
                            "eid346",
                            "display",
                            500,
                            0,
                            "easeOutQuad",
                            "${dbBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21368",
                            "height",
                            0,
                            0,
                            "easeOutQuad",
                            "${shadow}",
                            '1088px',
                            '1088px'
                        ],
                        [
                            "eid342",
                            "opacity",
                            375,
                            500,
                            "easeOutQuad",
                            "${rrBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21369",
                            "top",
                            0,
                            0,
                            "easeOutQuad",
                            "${shadow}",
                            '-50px',
                            '-50px'
                        ],
                        [
                            "eid336",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${wbBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid333",
                            "top",
                            0,
                            500,
                            "easeOutQuad",
                            "${panel}",
                            '1008px',
                            '586px'
                        ],
                        [
                            "eid357",
                            "top",
                            1500,
                            250,
                            "easeOutQuad",
                            "${panel}",
                            '586px',
                            '1008px'
                        ],
                        [
                            "eid370",
                            "left",
                            1000,
                            0,
                            "easeOutQuad",
                            "${dbBtn}",
                            '432px',
                            '432px'
                        ],
                        [
                            "eid23585",
                            "left",
                            0,
                            0,
                            "easeOutQuad",
                            "${panel}",
                            '-1px',
                            '-1px'
                        ],
                        [
                            "eid362",
                            "display",
                            500,
                            0,
                            "easeOutQuad",
                            "${cancel}",
                            'none',
                            'block'
                        ],
                        [
                            "eid363",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${cancel}",
                            'block',
                            'none'
                        ],
                        [
                            "eid343",
                            "display",
                            375,
                            0,
                            "easeOutQuad",
                            "${rrBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid23584",
                            "width",
                            0,
                            0,
                            "easeOutQuad",
                            "${panel}",
                            '642px',
                            '642px'
                        ],
                        [
                            "eid341",
                            "top",
                            375,
                            500,
                            "easeOutQuad",
                            "${rrBtn}",
                            '716px',
                            '696px'
                        ],
                        [
                            "eid355",
                            "top",
                            1500,
                            250,
                            "easeOutQuad",
                            "${rrBtn}",
                            '696px',
                            '1118px'
                        ],
                        [
                            "eid306",
                            "background-color",
                            0,
                            0,
                            "easeOutQuad",
                            "${shadow}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid344",
                            "top",
                            500,
                            500,
                            "easeOutQuad",
                            "${dbBtn}",
                            '716px',
                            '696px'
                        ],
                        [
                            "eid359",
                            "top",
                            1500,
                            250,
                            "easeOutQuad",
                            "${dbBtn}",
                            '696px',
                            '1118px'
                        ],
                        [
                            "eid345",
                            "opacity",
                            500,
                            500,
                            "easeOutQuad",
                            "${dbBtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid305",
                            "opacity",
                            0,
                            250,
                            "easeOutQuad",
                            "${shadow}",
                            '0',
                            '0.9'
                        ],
                        [
                            "eid361",
                            "opacity",
                            1500,
                            250,
                            "easeOutQuad",
                            "${shadow}",
                            '0.900000',
                            '0'
                        ],
                        [
                            "eid337",
                            "top",
                            250,
                            500,
                            "easeOutQuad",
                            "${wbBtn}",
                            '716px',
                            '696px'
                        ],
                        [
                            "eid358",
                            "top",
                            1500,
                            250,
                            "easeOutQuad",
                            "${wbBtn}",
                            '696px',
                            '1118px'
                        ],
                        [
                            "eid368",
                            "left",
                            1000,
                            0,
                            "easeOutQuad",
                            "${rrBtn}",
                            '267px',
                            '267px'
                        ],
                        [
                            "eid371",
                            "left",
                            1000,
                            0,
                            "easeOutQuad",
                            "${wbBtn}",
                            '102px',
                            '102px'
                        ],
                        [
                            "eid340",
                            "opacity",
                            250,
                            500,
                            "easeOutQuad",
                            "${wbBtn}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "wbBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'weixin',
                            rect: ['0px', '0px', '111px', '148px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/douban.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '111px', '148px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid309",
                            "scaleX",
                            0,
                            125,
                            "easeOutQuad",
                            "${weixin}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid311",
                            "scaleX",
                            125,
                            125,
                            "easeOutQuad",
                            "${weixin}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid310",
                            "scaleY",
                            0,
                            125,
                            "easeOutQuad",
                            "${weixin}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid312",
                            "scaleY",
                            125,
                            125,
                            "easeOutQuad",
                            "${weixin}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            },
            "wxBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '111px', '148px', 'auto', 'auto'],
                            id: 'weixin',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/weibo.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '111px', '148px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid309",
                            "scaleX",
                            0,
                            125,
                            "easeOutQuad",
                            "${weixin}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid311",
                            "scaleX",
                            125,
                            125,
                            "easeOutQuad",
                            "${weixin}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid310",
                            "scaleY",
                            0,
                            125,
                            "easeOutQuad",
                            "${weixin}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid312",
                            "scaleY",
                            125,
                            125,
                            "easeOutQuad",
                            "${weixin}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            },
            "shPop": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '750px', '1206px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'mask',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['776px', '17px', '224px', '319px', 'auto', 'auto'],
                            transform: [[], ['-25'], [], ['-1']],
                            id: 'shareicon',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/shareicon.png', '0px', '0px']
                        },
                        {
                            rect: ['138px', '52px', '420px', '94px', 'auto', 'auto'],
                            id: 'sharetxt',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sharetxt.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '750px', '1206px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "in": 0,
                        "out": 750
                    },
                    data: [
                        [
                            "eid25240",
                            "opacity",
                            0,
                            250,
                            "easeOutQuad",
                            "${mask}",
                            '0',
                            '0.8999999761581421'
                        ],
                        [
                            "eid25252",
                            "opacity",
                            750,
                            250,
                            "easeOutQuad",
                            "${mask}",
                            '0.900000',
                            '0'
                        ],
                        [
                            "eid25245",
                            "left",
                            0,
                            500,
                            "easeOutQuad",
                            "${shareicon}",
                            '776px',
                            '560px'
                        ],
                        [
                            "eid25481",
                            "opacity",
                            0,
                            250,
                            "easeOutQuad",
                            "${shareicon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25253",
                            "opacity",
                            750,
                            250,
                            "easeOutQuad",
                            "${shareicon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid25248",
                            "rotateZ",
                            0,
                            500,
                            "easeOutQuad",
                            "${sharetxt}",
                            '-25deg',
                            '-10deg'
                        ],
                        [
                            "eid25480",
                            "opacity",
                            0,
                            250,
                            "easeOutQuad",
                            "${sharetxt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25254",
                            "opacity",
                            750,
                            250,
                            "easeOutQuad",
                            "${sharetxt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid25246",
                            "rotateZ",
                            0,
                            500,
                            "easeOutQuad",
                            "${shareicon}",
                            '-25deg',
                            '-10deg'
                        ],
                        [
                            "eid25247",
                            "left",
                            0,
                            500,
                            "easeOutQuad",
                            "${sharetxt}",
                            '354px',
                            '138px'
                        ]
                    ]
                }
            },
            "chouBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'start',
                            type: 'image',
                            rect: ['-25px', '-13px', '400px', '132px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/end/chou.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '350px', '106px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid1461",
                            "scaleX",
                            0,
                            125,
                            "easeOutQuad",
                            "${start}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1462",
                            "scaleX",
                            125,
                            125,
                            "easeOutQuad",
                            "${start}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid1459",
                            "scaleY",
                            0,
                            125,
                            "easeOutQuad",
                            "${start}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid1460",
                            "scaleY",
                            125,
                            125,
                            "easeOutQuad",
                            "${start}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-809030275");
