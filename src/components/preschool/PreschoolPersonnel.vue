<template>
    <main class="preschool-personnel-container">
        <div class="preschool-personnel-container-list">
            <h1 class="preschool-personnel-container-list-title">KADRA PRZEDSZKOLE</h1>
            <div
                class="preschool-personnel-container-list-item"
                v-for="{ name, position } in personnelList"
                :key="name"
            >
                <div class="preschool-personnel-container-list-item-name">{{ name }}</div>
                <div class="preschool-personnel-container-list-item-position">{{ position }}</div>
            </div>
        </div>
        <img
            class="preschool-personnel-container-img"
            src="@/assets/preschool.png"
            loading="lazy"
        />
    </main>
</template>
<script>
export default {
    name: 'PreschoolPersonnel',
    data() {
        return {
            personnelList: [
                {
                    name: 'mgr Dorotaa Lisiecka',
                    position: 'dyrektor przedszkola',
                },
                {
                    name: 'mgr Justyna Musielska',
                    position: 'nauczyciel',
                },
                {
                    name: 'mgr Aldona Pawlak',
                    position: 'nauczyciel',
                },
                {
                    name: 'mgr Anna Tomiak',
                    position: 'nauczyciel',
                },
                {
                    name: 'mgr Ludmiła Górna',
                    position: 'nauczyciel języka angielskiego',
                },
                {
                    name: 'mgr Mirosława Morańda',
                    position: 'nauczyciel języka angielskiego',
                },
                {
                    name: 'Agnieszka Gronek',
                    position: 'pomoc nauczyciela',
                },
                {
                    name: 'Martyna Kwapisz',
                    position: 'pomoc nauczyciela',
                },
                {
                    name: 'mgr Marta Śmigórska',
                    position: 'zajęcia logopedyczne',
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .preschool-personnel-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        position: relative;

        &-list {
            position: absolute;
            left: 76px;
            top: 44px;
            background-color: #D4C6C2;
            width: 571px;
            font-family: 'Source Sans Pro', sans-serif;
            padding-bottom: 134px;

            &-title {
                font-size: 50px;
                font-weight: 900;
                color: #ffffff;
                text-align: start;
                padding-left: 8px;
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
        }

        &-img {
            background-image: url('../../assets/preschool.png');
            width: 100%;
            max-width: 809px;
        }
    }
</style>