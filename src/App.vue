<template>
    <div id="app">

        <div>
            <!-- As a heading -->
            <b-navbar variant="light" type="light" sticky>
                <b-navbar-brand tag="h1" class="mb-0">Ryan's Workspace</b-navbar-brand>


                <b-navbar-nav class="ml-auto">

                       <span style="font-size: 2em; color: Dodgerblue;cursor:pointer;" class="mr-1">
                                           <b-img width='32'
                                                  style="margin-bottom:9px;"
                                                  height="32"
                                                  @click="openLink('https://slackit.io')"
                                                  src="https://slackit.io/img/slackit-logo.png"></b-img></span>

                    <span style="font-size: 2em; color: Dodgerblue;cursor:pointer;" class="mr-1"
                          @click="openLink('https://github.com/RyanDaDeng')"><i
                            class="fab fa-github"></i></span>

                    <span style="font-size: 2em; color: Mediumslateblue;cursor:pointer;"
                          @click="openLink('https://www.linkedin.com/in/ryandeng')"><i
                            class="fab fa-linkedin"></i></span>

                </b-navbar-nav>

            </b-navbar>


            <b-row>

                <b-col cols="2">
                    <b-nav vertical class="w-25 float-left" style="position:fixed;">
                        <b-nav-item class="hvr-underline-from-center" :href="!component.isLink ? component.url:'#'"
                                    @click="openLink(component.url)"
                                    :active="component.active"
                                    v-for="(component,key) in components" :key="key">
                            {{component.name}}
                        </b-nav-item>
                    </b-nav>
                </b-col>

                <b-col offset="3" cols="8">

                    <demo-card :id="'about_me'">
                        <template v-slot:title>
                            About Me
                        </template>

                        <template v-slot:component>
                                       <span style="font-size: 2em; color: Dodgerblue;cursor:pointer;" class="mr-1">
                                           <b-img width='32'
                                                  style="margin-bottom:9px;"
                                                  height="32"
                                                  @click="openLink('https://slackit.io')"
                                                  src="https://slackit.io/img/slackit-logo.png"></b-img></span>

                            <span style="font-size: 2em; color: Dodgerblue;cursor:pointer;" class="mr-1"
                                  @click="openLink('https://github.com/RyanDaDeng')"><i
                                    class="fab fa-github"></i></span>

                            <span style="font-size: 2em; color: Mediumslateblue;cursor:pointer;"
                                  @click="openLink('https://www.linkedin.com/in/ryandeng')"><i
                                    class="fab fa-linkedin"></i></span>

                        </template>

                        <template v-slot:model>
                            <pre>{{ profile | pretty }}</pre>
                        </template>
                    </demo-card>

                    <demo-card :id="'recurrence_editor'">
                        <template v-slot:title>
                            Recurrence Editor
                        </template>

                        <template v-slot:component>
                            <recurrence-editor v-model="recurrence"></recurrence-editor>
                        </template>

                        <template v-slot:model>
                            <pre>{{ recurrence | pretty }}</pre>
                        </template>

                    </demo-card>


                    <demo-card :id="'question_maker'">

                        <template v-slot:title>
                            Question Maker
                        </template>

                        <template v-slot:component>
                            <question-maker :questions="questions" :limit="5"></question-maker>
                        </template>

                        <template v-slot:model>
                            <pre>{{ questions | pretty }}</pre>
                        </template>
                    </demo-card>


                    <demo-card :id="'social_button'">
                        <template v-slot:title>
                            Social Button
                        </template>

                        <template v-slot:component>

                            <social-button installUrl="#" button-name="Add to Slack">
                                <template v-slot:img>
                                    <img src="https://geekbot.com/landing/slack-logo.svg" alt="slack logo" class="mr-3"
                                         width="30px"
                                         height="30px">
                                </template>
                            </social-button>
                            <hr>
                            <social-button installUrl="#" button-name="Sign in with Slack">
                                <template v-slot:img>
                                    <img src="https://geekbot.com/landing/slack-logo.svg" alt="slack logo" class="mr-3"
                                         width="30px"
                                         height="30px">
                                </template>
                            </social-button>

                            <hr>
                            <social-button installUrl="#" button-name="Sign in with Google">
                                <template v-slot:img>
                                    <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                                         alt="slack logo" class="mr-3"
                                         width="30px"
                                         height="30px">
                                </template>
                            </social-button>
                            <hr>
                            <social-button installUrl="#" button-name="Sign in with Facebook">
                                <template v-slot:img>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                                         alt="slack logo" class="mr-3"
                                         width="30px"
                                         height="30px">
                                </template>
                            </social-button>

                            <hr>

                            <social-button installUrl="#" button-name="Sign in with Slackit">
                                <template v-slot:img>
                                    <img src="https://slackit.io/img/slackit-logo.png"
                                         alt="slack logo" class="mr-3"
                                         width="30px"
                                         height="30px">
                                </template>
                            </social-button>

                            <hr>

                            <social-button installUrl="#" button-name="Sign in with Github">
                                <template v-slot:img>

                                    <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                                         alt="slack logo" class="mr-3"
                                         width="30px"
                                         height="30px">


                                </template>
                            </social-button>


                            <hr>


                            <social-button installUrl="#" button-name="Sign in with Linkedin">
                                <template v-slot:img>

                                    <img src=" https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png"
                                         alt="slack logo" class="mr-3"
                                         width="30px"
                                         height="30px">
                                </template>
                            </social-button>
                        </template>

                    </demo-card>

                    <demo-card :id="'slack_button'">
                        <template v-slot:title>
                            Slack Button
                        </template>

                        <template v-slot:component>
                            <slack-button installUrl="#" button-name="Add to Slack"></slack-button>
                            <hr>
                            <slack-button installUrl="#" button-name="Sign in with Slack"></slack-button>
                        </template>


                    </demo-card>


                    <demo-card :id="'tag_selector'">
                        <template v-slot:title>
                            Tag Selector
                        </template>

                        <template v-slot:component>
                            <tag-selector v-model="selected_users" :objects="users"
                                          :state="false"></tag-selector>
                            <hr>
                            <tag-selector v-model="selected_users_2" :objects="users"
                                          :state="true"></tag-selector>
                        </template>

                        <template v-slot:model>
                            <pre>{{ selected_users | pretty }}</pre>

                            <hr>
                            <pre>{{ selected_users_2 | pretty }}</pre>
                        </template>
                    </demo-card>


                    <demo-card :id="'rating_bar'">
                        <template v-slot:title>
                            Image Styled Rating Bar
                        </template>

                        <template v-slot:component>
                            <rating-bar v-model.number="rating.half_rating"></rating-bar>
                            <p>Your rating is {{ rating.half_rating }}</p>


                            <rating-bar v-model.number="rating.full_rating" :half="false"></rating-bar>
                            <p>Your rating is {{ rating.full_rating }}</p>
                        </template>

                        <template v-slot:model>
                            <pre> {{ rating|pretty }}</pre>

                        </template>
                    </demo-card>


                    <demo-card :id="'css_rating_bar'">
                        <template v-slot:title>
                            Purely CSS Styled Rating Bar
                        </template>

                        <template v-slot:component>
                            <css-rating-bar v-model.number="cssRating.half_rating" :max-stars="5"></css-rating-bar>


                            <div>
                                <p>Your rating is {{ cssRating.half_rating }}</p>
                            </div>

                        </template>

                        <template v-slot:model>
                            <pre>{{ cssRating|pretty }}</pre>
                        </template>
                    </demo-card>


                    <demo-card :id="'topic_card'">
                        <template v-slot:title>
                            Topic Card
                        </template>

                        <template v-slot:component>


                            <topic-card v-model="topicItems"></topic-card>

                        </template>

                        <template v-slot:model>
                            <pre>  {{ topicItems|pretty }}</pre>

                        </template>
                    </demo-card>
                </b-col>

                <b-col cols="1">
                </b-col>
            </b-row>


        </div>

        <footer id="sticky-footer" class="py-4 bg-light text-black-50">
            <div class="container text-center">
                <small>Copyright 2020 &copy; Ryan's Workspace is part of slackit.io</small>
            </div>
        </footer>

    </div>
</template>

<script>
    import RecurrenceEditor from './components/RecurrenceEditor.vue'
    import QuestionMaker from './components/QuestionMaker.vue'
    import DemoCard from './components/DemoCard.vue'
    import {
        BCol,
        BNav,
        BNavItem,
        BNavbar,
        BNavbarBrand,
        BNavbarNav,
        BImg,
        BRow,

    } from 'bootstrap-vue';
    import SlackButton from "./components/SlackButton";
    import TagSelector from "./components/TagSelector";
    import RatingBar from "./components/RatingBar/RatingBar";
    import CssRatingBar from "./components/CssRatingBar/CssRatingBar";
    import TopicCard from "./components/TopicCard/TopicCard";
    import SocialButton from "./components/SocialButton/SocialButton";

    export default {
        name: 'App',
        filters: {
            pretty: function (value) {
                return JSON.stringify((value), null, 2);
            }
        },
        methods: {
            openLink(url) {
                if (url.startsWith("http")) {
                    window.open(url, '_blank');
                }
            }
        },
        data() {
            return {
                profile: {
                    nickname: 'Ryan',
                    full_name: 'Da Deng',
                    linkedIn: 'https://www.linkedin.com/in/ryandeng/',
                    github: 'https://github.com/RyanDaDeng',
                    location: 'Sydney/AU',
                    website: 'https://ryandeng.com'

                },
                cssRating: {
                    half_rating: 1.5
                },
                rating: {
                    half_rating: 1.5,
                    full_rating: 2
                },
                components: [
                    {
                        name: 'About Me',
                        active: true,
                        url: '#about_me',
                        isLink: false,
                    },
                    {
                        name: 'Project - Slackit',
                        active: true,
                        url: 'https://slackit.io',
                        isLink: true,
                    },
                    {
                        name: 'Vue - Recurrence Editor',
                        active: false,
                        url: '#recurrence_editor',
                        isLink: false,
                    },
                    {
                        name: 'Vue - Question Maker',
                        active: false,
                        url: '#question_maker',
                        isLink: false,
                    },
                    {
                        name: 'Vue - Social Button',
                        active: false,
                        url: '#social_button',
                        isLink: false,
                    },
                    {
                        name: 'Vue - Slack Button',
                        active: false,
                        url: '#slack_button',
                        isLink: false,
                    },
                    {
                        name: 'Vue - Tag Selector',
                        active: false,
                        url: '#tag_selector',
                        isLink: false,
                    },
                    {
                        name: 'Vue - Image Styled Rating Bar',
                        active: false,
                        url: '#rating_bar',
                        isLink: false,
                    },
                    {
                        name: 'Vue - Purely CSS Styled Rating Bar',
                        active: false,
                        url: '#css_rating_bar',
                        isLink: false,
                    },
                    {
                        name: 'Vue - Topic Card',
                        active: false,
                        url: '#topic_card',
                        isLink: false,
                    },
                    {
                        name: 'Laravel - Google reCAPTACHA v3',
                        active: false,
                        url: 'https://github.com/RyanDaDeng/laravel-google-recaptcha-v3',
                        isLink: true,
                    },
                    {
                        name: 'Laravel - Google reCAPTACHA v2',
                        active: false,
                        url: 'https://github.com/RyanDaDeng/laravel-google-recaptcha-v2',
                        isLink: true,
                    },
                    {
                        name: 'Laravel - DTO generator',
                        active: false,
                        url: 'https://github.com/RyanDaDeng/laravel-dto-generator',

                        isLink: true,
                    },
                    {
                        name: 'Laravel - SucrePay SecureFrame',
                        active: false,
                        url: 'https://github.com/RyanDaDeng/securepay-secureframe',
                        isLink: true,
                    },
                    {
                        name: 'Laravel - Todo Management System',
                        active: false,
                        url: 'https://github.com/RyanDaDeng/timehunter',
                        isLink: true,
                    },
                ],
                recurrence: null,
                selected_users: [
                    "2", "1"
                ],
                selected_users_2: [
                    "3"
                ],
                users: [
                    {
                        value: '1',
                        text: 'Ryan Deng',
                        img: 'https://avatars1.githubusercontent.com/u/54710951?s=70&v=4'
                    },
                    {
                        value: '2',
                        text: 'Peter Lee',
                        img: 'https://avatars1.githubusercontent.com/u/54710951?s=70&v=4'
                    },
                    {
                        value: '3',
                        text: 'Michale Yi',
                        img: 'https://avatars1.githubusercontent.com/u/54710951?s=70&v=4'
                    },
                    {
                        value: '4',
                        text: 'Tom Zhang',
                        img: 'https://avatars1.githubusercontent.com/u/54710951?s=70&v=4'
                    },

                ],
                questions: [
                    {
                        sort: 3,
                        subject: 'Anything blocking your progress?'
                    },
                    {
                        sort: 1,
                        subject: 'What did you do since {last_report_date}?'
                    },
                    {
                        sort: 2,
                        subject: 'What will you do today?'
                    },
                ],
                topicItems: [
                    {
                        id: '1',
                        title: 'please help me sss',
                        latest_reply_by: 'ryan',
                        author: 'peter',
                        app_name: '',
                        app_image: 'https://slackit.io/img/lost-and-found.png',
                        total_comments: 11,
                        submitted_time: '6 mins ago'
                    },
                    {
                        id: '2',
                        title: 'please help me sss',
                        latest_reply_by: 'ryan',
                        author: 'peter',
                        app_name: '',
                        app_image: 'https://slackit.io/img/read-me.png',
                        total_comments: 11,
                        submitted_time: '6 mins ago'
                    },
                    {
                        id: '3',
                        title: 'please help me sss',
                        latest_reply_by: 'ryan',
                        author: 'peter',
                        app_name: '',
                        app_image: 'https://slackit.io/img/event-maker.png',
                        total_comments: 11,
                        submitted_time: '6 mins ago'
                    },
                    {
                        id: '4',
                        title: 'please help me sss',
                        latest_reply_by: 'ryan',
                        author: 'peter',
                        app_name: '',
                        app_image: 'https://slackit.io/img/team-builder.png',
                        total_comments: 11,
                        submitted_time: '6 mins ago'
                    },
                ]
            }
        },
        components: {
            SocialButton,
            TopicCard,
            CssRatingBar,
            RatingBar,
            BRow,
            BCol,
            TagSelector,
            SlackButton,
            BNav,
            BNavItem,
            DemoCard,
            RecurrenceEditor,
            QuestionMaker,
            BNavbar,
            BNavbarBrand,
            BNavbarNav,
            BImg
        }
    }
</script>

<style>


    #sticky-footer {
        flex-shrink: none;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    /* Underline From Center */
    .hvr-underline-from-center {
        width: 80%;
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
        overflow: hidden;
    }

    .hvr-underline-from-center:before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 50%;
        right: 50%;
        bottom: 0;
        background: #2098d1;
        height: 4px;
        -webkit-transition-property: left, right;
        transition-property: left, right;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    .hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {
        left: 0;
        right: 0;
    }
</style>
