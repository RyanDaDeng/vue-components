<template>
    <div>

        <fieldset class="rating">
            <template v-for="(data,key) in this.totalInput">
                <input type="radio" :id="'star'+data.value" v-model="localRating" :key="'starInput'+key"
                       :checked="data.checked"
                       :value="data.value" @click="update"/>
                <label :class="data.class" :for="'star'+data.value" :key="'labelStar'+key"></label>
            </template>
        </fieldset>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: Number,
                default: 0.5,
            },
            maxStars: {
                type: Number,
                default: 5,
            }
        },
        components: {},
        data() {
            return {
                totalInput: [],
                localRating: this.value,
            }
        },
        computed: {},
        methods: {
            update(event) {
                this.$emit(
                    'input',
                    event.target.value
                )
            },
        },
        created() {
            let x = [];
            let counter = Number.parseFloat(this.maxStars);
            while (counter > 0) {
                let row = {
                    class: 'full',
                    value: counter,
                    checked: false
                };

                if ((Math.ceil(counter) - counter) === 0.5) {
                    row.class = 'half';
                }

                if (counter <= this.localRating) {
                    row.checked = true;
                }
                x.push(row);
                counter = counter - 0.5;
            }
            this.totalInput = x;
        },

        mounted() {
        }
    }
</script>

<style scoped>
    @import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

    fieldset, label {
        margin: 0;
        padding: 0;
    }


    /****** Style Star Rating Widget *****/

    .rating {
        border: 1px;
        float: left;
        display: -webkit-box;
    }

    .rating > input {
        display: none;
    }

    .rating > label:before {
        margin: 5px;
        font-size: 1.25em;
        font-family: FontAwesome;
        display: inline-block;
        content: "\f005";
    }

    .rating > .half:before {
        content: "\f089";
        position: absolute;
    }

    .rating > label {
        color: #ddd;
        float: right;
    }

    /***** CSS Magic to Highlight Stars on Hover *****/

    .rating > input:checked ~ label, /* show gold star when clicked */
    .rating:not(:checked) > label:hover, /* hover current star */
    .rating:not(:checked) > label:hover ~ label {
        color: #FFD700;
    }

    /* hover previous stars in list */

    .rating > input:checked + label:hover, /* hover current star when changing rating */
    .rating > input:checked ~ label:hover,
    .rating > label:hover ~ input:checked ~ label, /* lighten current selection */
    .rating > input:checked ~ label:hover ~ label {
        color: #FFED85;
    }
</style>
