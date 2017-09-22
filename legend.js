define(
    [
        'jquery',
        "css!./legend.css",
		"text!themes/old/sense/theme.json"
    ],
    function($, cssContent, Theme) {
        'use strict';
		var Theme = JSON.parse(Theme);
        return {
            definition: {
                type: "items",
                component: "accordion",
                items: {
                    appearance: {
                        uses: "settings",
                        items: {
                            myTextBox1: {
                                type: "items",
                                label: "First Legend",
                                items: {
                                    visibleBox: {
                                        label: "Is It Visible?",
                                        ref: "myVisibleBox1",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: true,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    },
									MyColorPicker: {
							          label:"My color-picker",
							          component: "color-picker",
							          ref: "myColor1",
							          type: "integer",
							          defaultValue: 3
						            },
                                    textBox: {
                                        label: "Name",
                                        ref: "myTextBox1",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    colorBox: {
                                        label: "Color",
                                        ref: "myColorBox1",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    typeBox: {
                                        label: "Line/Box",
                                        ref: "myTypeBox1",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    }
                                }
                            },
                            myTextBox2: {
                                type: "items",
                                label: "Second Legend",
                                items: {

                                    visibleBox: {
                                        label: "Is Visible?",
                                        ref: "myVisibleBox2",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: true,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    },
									MyColorPicker: {
							          label:"My color-picker",
							          component: "color-picker",
							          ref: "myColor2",
							          type: "integer",
							          defaultValue: 3
						            },
                                    textBox: {
                                        label: "Name",
                                        ref: "myTextBox2",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    colorBox: {
                                        label: "Color",
                                        ref: "myColorBox2",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    typeBox: {
                                        label: "Line/Box",
                                        ref: "myTypeBox2",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    }
                                }
                            },
                            myTextBox3: {
                                type: "items",
                                label: "Third Legend",
                                items: {
                                    visibleBox: {
                                        label: "Is Visible?",
                                        ref: "myVisibleBox3",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    },
                                    textBox: {
                                        label: "Name",
                                        ref: "myTextBox3",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    colorBox: {
                                        label: "Color",
                                        ref: "myColorBox3",
                                        type: "string",
                                        expression: "optional"
                                    },
									MyColorPicker: {
							          label:"My color-picker",
							          component: "color-picker",
							          ref: "myColor3",
							          type: "integer",
							          defaultValue: 3
						            },
                                    typeBox: {
                                        label: "Line/Box",
                                        ref: "myTypeBox3",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    }
                                }
                            },
                            myTextBox4: {
                                type: "items",
                                label: "Fourth Legend",
                                items: {
                                    visibleBox: {
                                        label: "Is Visible?",
                                        ref: "myVisibleBox4",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    },
                                    textBox: {
                                        label: "Name",
                                        ref: "myTextBox4",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    colorBox: {
                                        label: "Color",
                                        ref: "myColorBox4",
                                        type: "string",
                                        expression: "optional"
                                    },
									MyColorPicker: {
							          label:"My color-picker",
							          component: "color-picker",
							          ref: "myColor4",
							          type: "integer",
							          defaultValue: 1
						            },
                                    typeBox: {
                                        label: "Line/Box",
                                        ref: "myTypeBox4",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    }
                                }
                            }

                        }
                    }
                }
            },
            support: {
                snapshot: true,
                export: true,
                exportData: true
            },

            paint: function($element, layout) {
                $element.empty();
				console.log(Theme);
                var legendSpecs = {
                    measureName: [layout.myTextBox1, layout.myTextBox2, layout.myTextBox3, layout.myTextBox4],
                    background_color: [layout.myColor1, layout.myColor2, layout.myColor3, layout.myColor4],
                    type: [layout.myTypeBox1, layout.myTypeBox2, layout.myTypeBox3, layout.myTypeBox4],
                    visible: [layout.myVisibleBox1, layout.myVisibleBox2, layout.myVisibleBox3, layout.myVisibleBox4]

                }
                //console.log(document.getElementById(layout.qInfo.qId), layout.qHyperCube ) ;
				//console.log(mediaTool.palette[layout.myColor]);
				//$element.css("background-color", palette[layout.myColor]);
                var legend = '\
					<div class="legend" id="' + layout.qInfo.qId + '">';
                var columnWidth = ($element.width()/4 )< 140 ? 140  : ($element.width()/4) ;
                for (var i = 0; i < legendSpecs.measureName.length; i++) {
                    if (legendSpecs.visible[i]) {
                        let legendType = legendSpecs.type[i] ? 'box' : 'line';
                        legend += '<div class="column" style="font-size:12px' + ';width:' + columnWidth + 'px' + '"><div class="' + legendType + '" style="background-color:' + Theme.palette[legendSpecs.background_color[i]] + '"></div>' + '<b>' + legendSpecs.measureName[i] + '</b>' + '</div>';
                    }
                }

                legend += '</div>';

                $element.html(legend);

            }
        };
    }
);
