<template>
    <div>
        <b-input-group v-for="(question,key) in questions"
                       :key="key"
                       size="sm"
                       class="mb-3"
                       :prepend="'Question '+ (key+1) "
        >
            <b-form-input :state="getState(question)" @focusin="selectedInput(question)" :value="question.subject"
                          required
                          @change="changeQuestion(question,$event)"></b-form-input>
            <b-input-group-append>
                <b-button size="sm" text="Button" variant="danger" @click="removeQuestion(question)"
                          :disabled="questionLength === 1">
                    <b-icon-x-circle></b-icon-x-circle>
                </b-button>
            </b-input-group-append>
        </b-input-group>

        <div class="float-left">
            <small class="text-muted"> {{questionLength}} / {{this.limit}}</small>
        </div>
        <div class="float-right">
            <b-button v-if='questionLength < this.limit' size="sm" class="rounded mr-2" variant="success"
                      @click="addQuestion()">
                <b-icon-plus></b-icon-plus>
                Add
            </b-button>

            <b-button size="sm" class="rounded" variant="primary" @click="resetQuestion()">
                <b-icon-bootstrap-reboot></b-icon-bootstrap-reboot>
                Reset
            </b-button>
        </div>
    </div>
</template>

<script>
    import {
        BFormInput,
        BButton,
        BIconPlus,
        BInputGroupAppend,
        BIconBootstrapReboot,
        BInputGroup, BIconXCircle
    } from 'bootstrap-vue';

    export default {
        props: {
            state: {},
            questions: {
                type: Array,
                required: true,
                default() {
                    return [];
                }
            },
            limit: {
                type: Number,
                required: false,
                default: 5
            },
        },
        components: {
            BFormInput,
            BButton,
            BIconPlus,
            BInputGroupAppend,
            BIconXCircle,
            BInputGroup,
            BIconBootstrapReboot
        },
        data() {
            return {
                resetQuestions: [],
                selectedInputField: null
            }
        },
        computed: {
            questionLength() {
                return this.questions.length;
            }
        },
        methods: {
            getState(question) {
                if (!question.subject) {
                    question.state = false;
                    return false;
                }
                question.state = true;
                return true;
            },
            selectedInput(question) {
                this.selectedInputField = question;
            },
            changeQuestion(question, value) {
                question.subject = value;
            },
            sortQuestions() {
                this.questions.sort((x, y) => x.sort - y.sort);
            },
            addQuestion() {
                let len = this.questions.length;
                if (len < this.limit) {
                    this.questions.push(
                        {
                            sort: len + 1,
                            subject: ''
                        }
                    )
                }
            },
            removeQuestion(question) {
                let index = this.questions.indexOf(question);
                this.questions.splice(index, 1);
            },
            resetQuestion() {
                while (this.questions.length) {
                    this.questions.pop();
                }
                this.resetQuestions.forEach((v) => this.questions.push(v));
            }
        },
        created() {
        },
        mounted() {
            this.sortQuestions();
            this.resetQuestions = [...this.questions];
        }
    }
</script>

<style scoped>


</style>
