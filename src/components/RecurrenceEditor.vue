<template>
    <div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="repeat_option">Repeat</label>
            </div>
            <select class="custom-select" id="repeat_option" :value="repeatOption.type"
                    @change="updateRepeatOption($event)">

                <option v-for="option in options" :value="option.value" :key="option.value">{{option.name}}</option>
            </select>
        </div>


        <hr/>
        <div>
            <b> Repeat on</b>
        </div>
        <div>

            <div v-if="repeatOption.type === 'on_specific_dates'">
                <v-date-picker
                        mode='multiple'
                        v-model='mDates'
                />
            </div>

            <div v-if="repeatOption.type === 'every_week'">
                <label v-for="(date,key) in weekDayCheckBox" :key="key">
                    <input type="checkbox" :value="date.value" v-model="repeatOption.everyWeekPicker"
                           @change="updateWeekDayOption($event)">
                    <span>{{date.name}}</span>
                </label>
            </div>


            <div v-if="repeatOption.type === 'every_two_week'">

                <div class="row">

                    <div class="col-2 text-center">Week 1:</div>
                    <div class="col"><label v-for="(date,key) in weekDayCheckBox" :key="key">
                        <input type="checkbox" :value="date.value" v-model="repeatOption.weekOnePicker"
                               @change="updateEveryWeekOneOption($event)">
                        <span>{{date.name}}</span></label></div>

                </div>

                <div class="row">
                    <div class="col-2 text-center">Week 2:</div>
                    <div class="col"><label v-for="(date,key) in weekDayCheckBox" :key="key">
                        <input type="checkbox" :value="date.value" v-model="repeatOption.weekTwoPicker"
                               @change="updateEveryWeekTwoOption($event)">
                        <span>{{date.name}}</span>
                    </label></div>

                </div>
            </div>


            <div v-if="repeatOption.type === 'every_three_week'">

                <div class="row">

                    <div class="col-2 text-center">Week 1:</div>
                    <div class="col"><label v-for="(date,key) in weekDayCheckBox" :key="key">
                        <input type="checkbox" :value="date.value" v-model="repeatOption.weekOnePicker"
                               @change="updateEveryWeekOneOption($event)">
                        <span>{{date.name}}</span></label></div>

                </div>

                <div class="row">
                    <div class="col-2 text-center">Week 2:</div>
                    <div class="col"><label v-for="(date,key) in weekDayCheckBox" :key="key">
                        <input type="checkbox" :value="date.value" v-model="repeatOption.weekTwoPicker"
                               @change="updateEveryWeekTwoOption($event)">
                        <span>{{date.name}}</span>
                    </label></div>

                </div>

                <div class="row">
                    <div class="col-2 text-center">Week 3:</div>
                    <div class="col"><label v-for="(date,key) in weekDayCheckBox" :key="key">
                        <input type="checkbox" :value="date.value" v-model="repeatOption.weekThreePicker"
                               @change="updateEveryWeekTwoOption($event)">
                        <span>{{date.name}}</span>
                    </label></div>

                </div>
            </div>


            <div v-if="repeatOption.type === 'every_four_week'">

                <div class="row">

                    <div class="col-2 text-center">Week 1:</div>
                    <div class="col"><label v-for="(date,key) in weekDayCheckBox" :key="key">
                        <input type="checkbox" :value="date.value" v-model="repeatOption.weekOnePicker"
                               @change="updateEveryWeekOneOption($event)">
                        <span>{{date.name}}</span></label></div>

                </div>

                <div class="row">
                    <div class="col-2 text-center">Week 2:</div>
                    <div class="col"><label v-for="(date,key) in weekDayCheckBox" :key="key">
                        <input type="checkbox" :value="date.value" v-model="repeatOption.weekTwoPicker"
                               @change="updateEveryWeekTwoOption($event)">
                        <span>{{date.name}}</span>
                    </label></div>

                </div>

                <div class="row">
                    <div class="col-2 text-center">Week 3:</div>
                    <div class="col"><label v-for="(date,key) in weekDayCheckBox" :key="key">
                        <input type="checkbox" :value="date.value" v-model="repeatOption.weekThreePicker"
                               @change="updateEveryWeekThreeOption($event)">
                        <span>{{date.name}}</span>
                    </label></div>

                </div>

                <div class="row">
                    <div class="col-2 text-center">Week 4:</div>
                    <div class="col"><label v-for="(date,key) in weekDayCheckBox" :key="key">
                        <input type="checkbox" :value="date.value" v-model="repeatOption.weekFourPicker"
                               @change="updateEveryWeekFourOption($event)">
                        <span>{{date.name}}</span>
                    </label></div>

                </div>
            </div>

            <hr>
            <div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend" style="height: 2.2em;">
                        <label class="input-group-text">At</label>
                    </div>
                    <vue-timepicker v-model="repeatAt" id="at_time" format="HH:mm"
                                    @input="updateRepeatAt()"></vue-timepicker>
                </div>
                <em>
                    <small>Please use 24 hours format, for example, 11:00 PM should be 23:00.
                    </small>
                </em>
            </div>

            <!--            <hr/>-->
            <!--            <div>-->
            <!--                <b>Ends</b>-->
            <!--                <br/>-->

            <!--                <div>-->
            <!--                    <input type="radio" id="ends_never" value="ends_never" v-model="endsPicked"-->
            <!--                           @change="updateEndsPicked($event)">-->
            <!--                    <label for="ends_never">Never</label>-->
            <!--                </div>-->

            <!--                <div>-->
            <!--                    <input type="radio" id="ends_on" value="ends_on" v-model="endsPicked"-->
            <!--                           @change="updateEndsPicked($event)">-->
            <!--                    <label for="ends_on">On <input type="date" name="date" value="female"-->
            <!--                                                   :disabled="endsPicked !== 'ends_on'"></label>-->
            <!--                </div>-->

            <!--                <div>-->
            <!--                    <input type="radio" id="ends_after" value="ends_after" v-model="endsPicked"-->
            <!--                           @change="updateEndsPicked($event)">-->
            <!--                    <label for="ends_after">After <input type="number" min="1"-->
            <!--                                                         max="999"-->
            <!--                                                         :disabled="endsPicked !== 'ends_after'">-->
            <!--                        occurrences<br/></label>-->
            <!--                </div>-->

            <!--            </div>-->
        </div>

        <!--        <div>-->
        <!--            {{this.toString}}-->
        <!--        </div>-->
    </div>
</template>

<script>
    import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
    import DatePicker from 'v-calendar/lib/components/date-picker.umd'

    export default {
        props: ['value', 'enabled'],
        components: {
            VueTimepicker,
            'v-date-picker': DatePicker
        },
        watch: {
            mDates: function (val) {
                this.repeatOption.dates = val;
                this.emitModel();
            }
        },
        data() {
            return {
                options: [
                    {
                        name: 'every week',
                        value: 'every_week'
                    },
                    {
                        name: 'every day',
                        value: 'every_day'
                    },
                    {
                        name: 'every two week',
                        value: 'every_two_week'
                    },
                    {
                        name: 'every three week',
                        value: 'every_three_week'
                    },
                    {
                        name: 'every four week',
                        value: 'every_four_week'
                    },
                    {
                        name: 'on specific date(s)',
                        value: 'on_specific_dates'
                    }
                ],
                mDates: [],
                range: {
                    start: new Date(2018, 0, 16), // Jan 16th, 2018
                    end: new Date(2018, 0, 19)    // Jan 19th, 2018
                },
                onSpecificDatesModel: {
                    type: 'on_specific_dates',
                },
                everyFourWeekModel: {
                    type: 'every_four_week',
                    weekOnePicker: ['1', '2', '3', '4', '5'],
                    weekTwoPicker: ['1', '3', '5'],
                    weekThreePicker: ['1', '2', '3', '5'],
                    weekFourPicker: ['1', '4', '3', '5'],
                },
                everyThreeWeekModel: {
                    type: 'every_three_week',
                    weekOnePicker: ['1', '2', '3', '4', '5'],
                    weekThreePicker: ['1', '2', '3', '5'],
                    weekTwoPicker: ['1', '3', '5'],
                },
                everyTwoWeekModel: {
                    type: 'every_two_week',
                    weekOnePicker: ['1', '2', '3', '4', '5'],
                    weekTwoPicker: ['1', '3', '5'],
                },
                everyWeekModel: {
                    type: 'every_week',
                    everyWeekPicker: ['1', '2', '3', '4', '5', '6', '7']
                },
                everyDayModel: {
                    type: 'every_day',
                },
                repeatOption: {
                    type: 'every_day',
                },
                repeatAt: '10:00',
                toString: '',
                endsPicked: '10:00',
                weekDayCheckBox: [
                    {
                        name: 'Mon',
                        value: '1',
                        full_name: 'Monday'
                    },
                    {
                        name: 'Tue',
                        value: '2',
                        full_name: 'Tuesday'
                    },
                    {
                        name: 'Wed',
                        value: '3',
                        full_name: 'Wednesday'
                    },
                    {
                        name: 'Thu',
                        value: '4',
                        full_name: 'Thursday'
                    },
                    {
                        name: 'Fri',
                        value: '5',
                        full_name: 'Friday'
                    }
                    , {
                        name: 'Sat',
                        value: '6',
                        full_name: 'Saturday'
                    },
                    {
                        name: 'Sun',
                        value: '7',
                        full_name: 'Sunday'
                    },
                ]
            }
        },
        computed: {},
        methods: {
            emitData(data) {
                this.$emit('input', data);
                this.toString = this.generateString(data);
            },
            generateString(data) {
                let str = '';
                switch (data.repeatOption.type) {
                    case 'every_week': {
                        let hash = {
                            '1': 'Monday',
                            '2': 'Tuesday',
                            '3': 'Wednesday',
                            '4': 'Thursday',
                            '5': 'Friday',
                            '6': 'Saturday',
                            '7': 'Sunday'
                        };

                        str += 'Weekly from ';
                        let weekNames = data.repeatOption.everyWeekPicker.map(function (v) {
                            return hash[v];
                        }).join(',');

                        str += weekNames;
                        str += ' at ' + data.repeatAt;
                        break;
                    }
                    case 'every_day': {
                        str = 'Everyday  at ' + data.repeatAt;
                        break;
                    }
                }
                return str;
            },
            updateWeekDayOption() {
                this.repeatOption.everyWeekPicker.sort();
                this.emitModel();
            },
            updateEveryWeekOneOption() {
                this.repeatOption.weekOnePicker.sort();
                this.emitModel();
            },
            updateEveryWeekTwoOption() {
                this.repeatOption.weekTwoPicker.sort();
                this.emitModel();
            },
            updateEveryWeekThreeOption() {
                this.repeatOption.weekOnePicker.sort();
                this.emitModel();
            },
            updateEveryWeekFourOption() {
                this.repeatOption.weekOnePicker.sort();
                this.emitModel();
            },
            updateDates() {
                console.log('sss');
                this.emitModel();
            },
            updateRepeatAt() {
                this.emitModel();
            },
            updateRepeatOption(event) {

                switch (event.target.value) {
                    case 'every_week': {
                        this.repeatOption = {...this.everyWeekModel};
                        break;
                    }
                    case 'every_day': {
                        this.repeatOption = {...this.everyDayModel};
                        break;
                    }
                    case 'every_two_week': {
                        this.repeatOption = {...this.everyTwoWeekModel};
                        break;
                    }
                    case 'every_three_week': {
                        this.repeatOption = {...this.everyThreeWeekModel};
                        break;
                    }
                    case 'every_four_week': {
                        this.repeatOption = {...this.everyFourWeekModel};
                        break;
                    }
                    case 'on_specific_dates': {
                        this.repeatOption = {...this.onSpecificDatesModel};
                        break;
                    }
                }
                this.emitModel();
            },
            updateEndsPicked(event) {
                let data = {...this.value};
                data.endsPicked = event.target.value;
                this.emitData(data);
            },
            emitModel() {
                this.emitData(
                    {
                        repeatOption: {...this.repeatOption},
                        repeatAt: this.repeatAt,
                    }
                )
            },
            init() {
                if (!this.value) {
                    this.repeatOption = {...this.everyWeekModel};
                    this.emitModel();
                } else {
                    this.repeatOption = {...this.value.repeatOption};
                    this.repeatAt = this.value.repeatAt;
                }

                if (this.enabled && this.enabled.length > 0) {
                    let app = this;
                    this.options = this.options.filter(function (item) {
                        return app.enabled.find(value => value === item.value);
                    })
                }
            }
        },
        created() {
            this.init();
            // this.toString = this.generateString(this.value);
        },
        mounted() {
        }
    }
</script>

<style scoped>

    input[type=checkbox] {
        display: none;
    }

    label :checked + span {
        background: #66bb6a;
        color: white;
    }

    label span {
        display: inline-block;
        background: lightgrey;
        height: 3em;
        width: 3em;
        line-height: 3em;
        text-align: center;
        border-radius: 50%;
        cursor: pointer;
        margin-right: 2px;
    }

    .round {
        position: relative;
    }

    .round label {
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
        cursor: pointer;
        height: 28px;
        left: 0;
        position: absolute;
        top: 0;
        width: 28px;
    }

    .round input[type="checkbox"] {
        visibility: hidden;
    }

    .round input[type="checkbox"]:checked + label {
        background-color: #66bb6a;
        border-color: #66bb6a;
    }

    .round input[type="checkbox"]:checked + label:after {
        opacity: 1;
    }


</style>
