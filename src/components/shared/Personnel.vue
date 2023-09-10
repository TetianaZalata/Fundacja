<template>
    <main class="personnel-container">
        <div class="personnel-container-list">
            <h1 class="personnel-container-list-title">{{ title }}</h1>
            <div
                v-if="isAuth"
                class="d-flex justify-end mb-2 mr-1"
            >
                <v-btn tile @click="openModal(null, null, 'Create')">
                    add employee
                </v-btn>
            </div>
            <v-simple-table>
                <template v-slot:default>
                    <tbody v-if="!isLoading && personnelList">
                        <tr
                            v-for="(item, key) in sortedByName"
                            :key="key"
                        >
                            <td class="text-left">{{ item.name }}</td>
                            <td class="text-left">{{ item.position }}</td>
                            <td
                                v-if="isAuth"
                                class="text-left"
                            >
                                <v-btn
                                    icon
                                    @click="openModal(item, key, 'Edit')"
                                >
                                    <svg-icon :style="{color: '#0D47A1'}" type="mdi" :path="mdiPencilOutline"></svg-icon>
                                </v-btn>
                                <v-btn
                                    icon
                                    @click="openModal(item, key, 'Delete')"
                                >
                                    <svg-icon :style="{color: '#EF5350'}" type="mdi" :path="mdiTrashCanOutline"></svg-icon>
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
                            ref="fullName"
                            v-model="user.fullName"
                            class="field"
                            label="Full name"
                            type="text"
                            :rules="rules"
                            :error-messages="errorMessages"
                            hide-details="auto"
                            :disabled="isDelete"
                            required
                        />
                        <v-text-field
                            ref="position"
                            v-model="user.position"
                            class="field"
                            label="Position"
                            type="text"
                            :rules="rules"
                            :error-messages="errorMessages"
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
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiPencilOutline, mdiTrashCanOutline } from "@mdi/js";


export default {
    name: "Personnel",
    components :{
        SvgIcon,
    },
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
            errorMessages: '',
            error: false,
            dialog: false,
            mdiPencilOutline,
            mdiTrashCanOutline,
        }
    },
    computed: {
        ...mapGetters('authUser', ['isAuth', 'isLoading']),
        isDelete() {
            return this.action.toLowerCase() === 'delete';
        },
        sortedByName() {
            if (!!this.personnelList && Object.values(this.personnelList).length) {
                const personnelList = { ...this.personnelList };
                let sortedArray = Object.values(personnelList).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));                
                const manager = sortedArray.find((i) => i.position.includes('dyrektor'));
                if (manager) {
                  sortedArray = sortedArray.filter((i) => !i.position.includes('dyrektor'));
                  sortedArray.unshift(manager);
                }
                let sortedObject = {};
                sortedArray.forEach((i) => {
                  Object.entries(personnelList).forEach(([key, val]) => {
                    if (i.id === val.id) {
                      sortedObject[key] = val;
                    }
                  })
                })
                return sortedObject;
            }
            return {};
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
            this.error = false;
            if(!this.$refs.fullName.value) {
                this.$refs.fullName.validate(true);
                this.error = true;
            }
            if(!this.$refs.position.value) {
                this.$refs.position.validate(true);
                this.error = true;
            }
            if(this.error) {
                return;
            }

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
            font-size: 34px !important;
            font-weight: 900;
            text-align: start;
            line-height: 44px;
            margin-bottom: 10px;
            font-family: "Source Sans Pro", sans-serif !important;
            text-transform: uppercase;

            @media screen and (max-width: 600px) {
              font-size: 28px !important;
              text-align: center;
            }
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