<template>
    <div>
        <div @click="update" :style="ratingBgStyle" @mousemove="onMousemove" @mouseout="reset()"
             :class="{ active: hover }">
            <div :style="ratingBarStyle"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            half: {
                type: Boolean,
                default: true,
                required: false
            },
            maxStars: {
                type: Number,
                default: 5,
            }
        },
        components: {},
        data() {
            return {
                hover: false,
                starSize: 32,
                localMovement: this.value
            }
        },
        computed: {
            sizePx() {
                return `${this.starSize}px`
            },
            barSize() {
                return `${this.localMovement * this.starSize}px`
            },
            maxBarSize() {
                return `${this.maxStars * this.starSize}px`
            },
            ratingBgStyle() {
                return {
                    backgroundImage: "url('./unstar.png')",
                    backgroundSize: "contain",
                    width: this.maxBarSize,
                    height: this.sizePx,
                }
            },
            ratingBarStyle() {
                return {
                    backgroundImage: "url('./star.png')",
                    backgroundSize: "auto 100%",
                    width: this.barSize,
                    height: this.sizePx,
                }
            },
        },
        methods: {
            reset() {
                this.localMovement = this.value;
            },
            onMousemove(event) {
                this.localMovement = this.calculateStars(event.offsetX);
                // console.log(event.offsetX);
            },
            update(event) {
                this.$emit(
                    'input',
                    this.calculateStars(event.offsetX)
                )
            },
            calculateStars(offsetX) {
                // let half = this.half ? 0.5 : 1;
                // if (offsetX  < this.starSize * 0.5 * half) {
                //     return 0;
                // }
                let ratio = offsetX / this.starSize;
                return this.half ? Math.ceil(ratio / 0.5) * 0.5 : Math.ceil(ratio);
            },
        },
        created() {
        },
        mounted() {
        }
    }
</script>

<style scoped>


</style>
