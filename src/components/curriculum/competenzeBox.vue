<template>
    <div class="cv-container">
        <div class="border">
            <h4>Competenze</h4>
            
            <div class="cv-box"
            v-for="(item, index) in competenze"
            :key="index"
            >
             {{ item }}
            </div>
            
            

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            competenze: [
                'Html',
                'Css',
                'Javascript',
                'Php',
                'MySql',
                'Bootstrap',
                'VueJS',
                'Laravel',
                'Affinity Designer',
                'Figma',
                'SketchUp',
                'Microsoft Office',
                'Google Workspace',


            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '/src/styles/main.scss';




</style>