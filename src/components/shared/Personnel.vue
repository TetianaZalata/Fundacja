<template>
    <main class="personnel-container">
        <div class="personnel-container-list">
            <h1 class="personnel-container-list-title">{{ title }}</h1>
            <div class="d-flex justify-end mb-2 mr-1">
                <v-btn tile @click="openModal(null, null, 'Create')">
                    add employee
                </v-btn>
            </div>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr class="blue-grey lighten-4">
                            <th class="text-left">Imię i Nazwisko</th>
                            <th class="text-left">Stopień</th>
                            <th class="text-left">Pozycja</th>
                            <th v-if="isAuth">Działania</th>
                        </tr>
                    </thead>
                    <tbody v-if="!isLoading && personnelList">
                        <tr
                            v-for="(item, key) in personnelList"
                            :key="key"
                        >
                            <td class="text-left">{{ item.name }}</td>
                            <td class="text-left">{{ item.degree }}</td>
                            <td class="text-left">{{ item.position }}</td>
                            <td
                                v-if="isAuth"
                                class="text-left"
                            >
                                <v-btn
                                    icon
                                    @click="openModal(item, key, 'Edit')"
                                >
                                    <v-icon color="blue darken-4">mdi-pencil-outline</v-icon>
                                </v-btn>
                                <v-btn
                                    icon
                                    @click="openModal(item, key, 'Delete')"
                                >
                                    <v-icon color="red lighten-1">mdi-trash-can-outline</v-icon>
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                    <div v-if="!isLoading && personnelList.length === 0">
                        add new employee
                    </div>
                </template>
            </v-simple-table>
            <div
                v-if="isLoading"
                class="d-flex justify-center ma-5"
            >
                <v-progress-circular
                    indeterminate
                    color="primary"
                />
            </div>
            <v-dialog
                v-model="dialog"
                max-width="400"
            >
                <v-card class="pa-5">
                    <v-card-title class="text-h5">{{ modalTitle || '' }}</v-card-title>
                    <v-card-text v-if="isDelete">
                        Czy na pewno chcesz usunąć tego pracownika z listy?
                    </v-card-text>
                    <v-card-text>
                        <v-text-field
                            v-model="user.fullName"
                            class="field"
                            label="Full name"
                            type="text"
                            :rules="rules"
                            hide-details="auto"
                            :disabled="isDelete"
                        />
                        <v-text-field
                            v-model="user.degree"
                            class="field"
                            label="Degree"
                            type="text"
                            :rules="rules"
                            hide-details="auto"
                            :disabled="isDelete"
                        />
                        <v-text-field
                            v-model="user.position"
                            class="field"
                            label="Position"
                            type="text"
                            :rules="rules"
                            hide-details="auto"
                            :disabled="isDelete"
                        />
                    </v-card-text>
                    <v-card-actions class="d-flex justify-end mt-5">
                        <v-btn
                            tile
                            text
                            @click="closeDialog"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            tile
                            @click="handleEmployee"
                            text
                        >
                            {{ action }}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </main>
</template>
<script>
import { mapGetters } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref, push, set, update, remove } from "firebase/database";
// import { getDatabase, ref, push, set, doc, setDoc } from "firebase/database";

export default {
    name: "Personnel",
    props: {
        personnelList: {
            required: true,
            type: [Array, Object],
        },
        title: {
            required: true,
            type: String,
        },
        personnelType: {
            required: true,
            type: String,
        },
    },
    data() {
        return {
            user: {
                fullName: '',
                degree: '',
                position: '',
                key: '',
            },
            modalTitle: '',
            action: '',
            rules: [
            value => !!value || 'Required',
            value => value.length > 3 || 'Must be more then 3',
            ],
            dialog: false,
        }
    },
    computed: {
        ...mapGetters('authUser', ['isAuth', 'isLoading']),
        isDelete() {
            return this.action.toLowerCase() === 'delete';
        },
    },
    methods: {
        closeDialog() {
            this.dialog = false;
            this.clearFields();
        },
        clearFields() {
            this.user.fullName = '';
            this.user.degree = '';
            this.user.position = '';
            this.modalTitle = '';
            this.action = '';
        },
        openModal(item, key, action) {
            this.dialog = true;

            if(action.toLowerCase() === 'edit' || action.toLowerCase() === 'delete') {
                this.user.fullName = item.name;
                this.user.degree = item.degree;
                this.user.position = item.position;
                this.user.key = key;
            }
            
            this.modalTitle = `${action} employee`;
            this.action = action.toLowerCase();
        },
        addNewEmployee() {
            const db = getDatabase();
            const list = ref(db, this.personnelType);
            const newListItem = push(list);
            set(newListItem, {
                name: this.user.fullName,
                degree: this.user.degree,
                position: this.user.position,
                createdAt: new Date().toString(),
                id: uuidv4(),
            }).then(() => {
               this.closeDialog();
            }).catch((err) => {
                console.error(err);
            })
        },
        editEmployee() {
            const db = getDatabase();
            const dbRef = ref(db, `${this.personnelType}/${this.user.key}`);
            const data = {
                name: this.user.fullName,
                degree: this.user.degree,
                position: this.user.position,
            }

            update(dbRef, data)
            .then(() => {
               this.closeDialog();
            }).catch((err) => {
                console.error(err);
            })
        },
        deleteEmployee() {
            const db = getDatabase();
            const dbRef = ref(db, `${this.personnelType}/${this.user.key}`);

            remove(dbRef)
            .then(() => {
               this.closeDialog();
            }).catch((err) => {
                console.error(err);
            })
        },
        handleEmployee() {
            if (this.action.toLowerCase() === 'create') {
                this.addNewEmployee();
            } else if (this.action.toLowerCase() === 'edit') {
                this.editEmployee();
            } else if (this.action.toLowerCase() === 'delete') {
                this.deleteEmployee();
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.personnel-container {
    width: 100%;
    height: 100%;

    &-list {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        margin-bottom: 15px;

        &-title {
            font-size: 50px !important;
            font-weight: 900;
            text-align: start;
            line-height: 50px;
            margin-bottom: 10px;
            font-family: "Source Sans Pro", sans-serif !important;
            text-transform: uppercase;
        }

        &-item {
            margin-left: 28px;
            margin-bottom: 50px;
            text-align: start;

            &-name {
                font-weight: 900;
                font-size: 32px;
                line-height: 32px;
            }

            &-position {
                font-weight: 400;
                font-size: 32px;
                line-height: 32px;
            }
        }

        .new-employee-form {
            .field {
                max-width: 400px;
            }
        }
    }
}
</style>