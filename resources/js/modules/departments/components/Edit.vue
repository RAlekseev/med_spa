<template>
    <span>
        <button class="btn btn-primary btn-round" data-toggle="modal" :data-target="'#editModal' + department.id">
            <i class="fa fa-edit"></i>
        </button>
    <div class="modal fade font-weight-bold text-primary text-left" :id="'editModal' + department.id"
         tabindex="-1" role="dialog" aria-labelledby="editModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Редактирование отделения:<br>
                        <b>{{department.name}}</b></h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        <i class="fa fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="updateDepartment()" method="post">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="bmd-label-floating">Название<span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" v-model="department.name"
                                           required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="typo__label">Иконка<span class="text-danger">*</span></label>
                                    <multiselect v-model="department.icon" :options="icon_types"
                                                 :close-on-select="true" group-values="icons"
                                                 group-label="name"
                                                 placeholder="Выберите изображение" track-by="id"
                                                 label="name">
                                        <span slot="noResult">Ни одной иконки не обнаружено</span>

                                        <template slot="singleLabel" slot-scope="props">
                                            <Icon :icon_id="props.option.id"></Icon>
                                            <span class="option__title">{{ props.option.source }}</span>
                                        </template>
                                        <template slot="option" slot-scope="props">
                                            <Icon :icon_id="props.option.id"></Icon>
                                            <span class="option__title">{{ props.option.source ? props.option.source : props.option.$groupLabel}}</span>
                                        </template>
                                    </multiselect>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="bmd-label-floating">Описание<span
                                            class="text-danger">*</span></label>
                                    <textarea type="text" class="form-control" v-model="department.description"
                                              required>Введите описание отделения</textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="bmd-label-floating">Сотрудники</label>
                                    <multiselect v-model="department.users"
                                                 :options="employees"
                                                 :multiple="true"
                                                 :close-on-select="false"
                                                 placeholder="Выберите сотрудников"
                                                 label="full_name"
                                                 track-by="full_name"
                                    ></multiselect>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">Изменить</button>
                            <button :id="'close' + department.id" type="button" class="btn btn-danger" data-dismiss="modal">Закрыть
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
    </span>

</template>

<script>
    import {mapGetters} from "vuex";
    import Multiselect from "vue-multiselect";
    import Icon from "../../icons/components/Icon";

    export default {
        props: ['department'],
        computed: {
            ...mapGetters([
                'employees',
                'icon_types',
            ])
        },
        components: {
            Multiselect,
            Icon,
        },
        methods: {
            updateDepartment() {
                this.department.icon_id = this.department.icon.id
                document.getElementById('close' + this.department.id).click();
                this.$store.dispatch('updateDepartment', this.department)
            },
        }
    }
</script>
