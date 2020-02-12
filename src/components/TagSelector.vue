<template>
    <div>

        <b-form-tags v-model="localValue" no-outer-focus :state="state">
            <template v-slot="{ tags, disabled, addTag, removeTag }">


                <b-dropdown size="sm" variant="outline-secondary" block menu-class="w-100">
                    <template v-slot:button-content>
                        <b-icon icon="tag-fill"></b-icon>
                        Select participant(s)
                    </template>
                    <b-dropdown-form @submit.stop.prevent="() => {}">
                        <b-form-group
                                label="Search users"
                                label-cols-md="auto"
                                class="mb-0"
                                label-size="sm"
                                :description="searchDesc"
                                :disabled="disabled"
                        >
                            <b-form-input
                                    v-model="search"
                                    type="search"
                                    size="sm"
                                    autocomplete="off"
                            ></b-form-input>
                        </b-form-group>
                    </b-dropdown-form>
                    <b-dropdown-divider></b-dropdown-divider>


                    <div class="scrollable">
                        <b-dropdown-item-button
                                v-for="option in mappedObjects(availableOptions)"
                                :key="option.value"
                                @click="onOptionClick({ option, addTag })"
                        >
                            <b-img-lazy :src="option.img" rounded></b-img-lazy>
                            {{ option.text }}
                        </b-dropdown-item-button>
                    </div>


                    <b-dropdown-text v-if="availableOptions.length === 0">
                        There are no tags available to select
                    </b-dropdown-text>
                </b-dropdown>


                <div v-if="tags.length > 0">
                    <hr>
                    <ul class="list-inline d-inline-block">
                        <li v-for="tag in mappedTags" :key="tag.value" class="list-inline-item">
                            <b-form-tag
                                    @remove="removeTag(tag.value)"
                                    :title="tag.text"
                                    :disabled="disabled"
                                    variant="light"
                            >
                                <b-img-lazy :src="tag.img" rounded></b-img-lazy>
                                {{ tag.text }}
                            </b-form-tag>
                        </li>
                    </ul>
                </div>

            </template>
        </b-form-tags>

    </div>
</template>
<script>
    import {
        BFormGroup,
        BFormTags,
        BDropdownText,
        BDropdown,
        BDropdownItemButton,
        BDropdownDivider,
        BIcon,
        BFormTag,
        BFormInput,
        BDropdownForm,
        BImgLazy
    } from 'bootstrap-vue';

    export default {
        components: {
            BImgLazy,
            BDropdownForm,
            BFormTag,
            BFormGroup,
            BFormTags,
            BDropdownText,
            BDropdown,
            BDropdownItemButton,
            BDropdownDivider,
            BIcon,
            BFormInput
        },
        props: ['objects', 'value', 'state'],
        data() {
            return {
                search: '',
                localValue: []
            }
        },
        watch: {
            // whenever question changes, this function will run
            localValue: function () {
                let data = [...this.localValue];
                this.$emit('input', data);
            }
        },
        computed: {
            options() {
                return this.mappedOptions(this.objects);
            },
            mappedTags() {
                /* This is case sensitive */
                return this.objects.filter(option => this.localValue.includes(option.value))
            },
            criteria() {
                // Compute the search criteria
                return this.search.trim().toLowerCase()
            },
            availableOptions() {
                const criteria = this.criteria
                // Filter out already selected options
                const options = this.options.filter(opt => this.localValue.indexOf(opt) === -1)
                if (criteria) {
                    // Show only options that match criteria
                    return this.mappedOptions(
                        this.mappedObjects(options).filter(opt => opt.text.toLowerCase().indexOf(criteria) > -1)
                    );
                }
                // Show all options available
                return options
            },
            searchDesc() {
                if (this.criteria && this.availableOptions.length === 0) {
                    return 'There are no users matching your search criteria'
                }
                return ''
            }
        },
        created() {
            if (this.value && this.value.length > 0) {
                this.localValue = [...this.value];
            }
        },
        methods: {
            mappedOptions(objects) {
                return objects.map(obj => obj['value']);
            },
            mappedObjects(options) {
                return this.objects.filter(option => options.includes(option.value));
            },
            onOptionClick({option, addTag}) {
                addTag(option.value);
                this.search = '';
            }
        }
    }
</script>

<style scoped>
    /*@media (max-height: 200px) {*/
    .scrollable {
        height: 200px;
        overflow-y: auto;
    }

    /*}*/

</style>
