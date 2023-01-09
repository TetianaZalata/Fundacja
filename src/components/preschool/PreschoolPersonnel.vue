<template>
    <Personnel
        :title="title"
        :personnel-list="personnelList"
        :personnel-type="personnelType"
    />
</template>
<script>
    import Personnel from '@/components/shared/Personnel.vue';
    import { getDatabase, ref, onValue } from "firebase/database";

    export default {
        name: 'PreschoolPersonnel',
        components: {
            Personnel,
        },
        data() {
            return {
                title: 'KADRA PRZEDSZKOLE',
                personnelList: [],
                personnelType: 'preschool-personnel'
            }
        },
        created() {
            this.getUsers();
        },
        methods: {
            getUsers() {
                const db = getDatabase();
                const dbRef = ref(db, this.personnelType);
                
                onValue(dbRef, (snapshot) => {
                    this.personnelList = snapshot.val() || [];
                }, {
                    onlyOnce: false
                });
                
            }
        }
    }
</script>
