<template>
    <main>
        <v-text-field
            label="Login"
            :rules="rules"
            hide-details="auto"
        ></v-text-field>
    </main>
</template>

<script>
export default {
    data: () => ({
        rules: [
            value => !!value || 'Required',
        ]
    })
}
</script>