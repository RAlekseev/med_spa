<template>
    <span>
        <button class="ml-3 btn btn-success btn-round" data-toggle="modal" data-target="#createModal">
            <i class="fa fa-plus"></i> Создать заявку
        </button>

        <div class="modal fade" id="createModal" tabindex="-1" role="dialog" aria-labelledby="createModalLabel"
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Создание заявки</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            <i class="fa fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="createRequest()" method="post">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Комментарий</label>
                                        <textarea type="text" class="form-control" v-model="request.comment">
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row" v-for="(inventory, i) in request.inventories">
                                <div class="col-md-8">
                                    <div class="form-group">
                                        <label class="typo__label">Выберите объект прихода</label>
                                        <Multiselect v-model="request.inventories[i]"
                                                     :options="available_inventories"
                                                     :close-on-select="true"
                                                     placeholder="Выберите объект заявки"
                                                     :aria-multiline="true"
                                                     track-by="name">

                                            <span slot="noResult">Ни одного объекта не обнаружено</span>
                                            <template slot="singleLabel" slot-scope="props">
                                                <span class="option__title">
                                                    {{ props.option.name + (props.option.unit ? '  Ед. ' + props.option.unit : "")}}
                                                </span>
                                            </template>
                                            <template slot="option" slot-scope="props">
                                                <span class="option__title">
                                                    {{ props.option.name + (props.option.unit ? '  Ед. ' + props.option.unit : "")}}
                                                </span>
                                            </template>

                                        </Multiselect>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Количество</label>
                                        <input type="number" class="form-control"
                                               v-model="request.inventories[i].selected_amount" required>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-4">
                                <div class="m-auto">
                                    <i class="fa fa-minus text-danger" v-if="request.inventories.length > 1"
                                        @click="delInventory()"></i>
                                    <i class="fa fa-plus text-success" @click="addInventory()"
                                       v-if="request.inventories.length < inventories.length"></i>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Создать</button>
                                <button id="close" type="button" class="btn btn-danger" data-dismiss="modal">Закрыть
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
    import {Multiselect} from "vue-multiselect";
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                request: {
                    comment: null,
                    inventories: [
                        {
                            id: 0,
                            name: "Не выбрано",
                            unit: null,
                            selected_amount: null,
                        }
                    ],
                },
            }
        },
        components: {
            Multiselect,
        },
        computed: {
            ...mapGetters([
                'inventories',
            ]),
            available_inventories: function () {
                return this.inventories.filter(item => !this.request.inventories.find(selected => selected.id == item.id))
            },
        },
        methods: {
            createRequest() {
                this.request.inventories = this.request.inventories.filter(inventory => inventory != 0);
                document.getElementById('close').click();
                this.$store.dispatch('createWarehouseRequest', this.request)
            },
            addInventory() {
                this.request.inventories.push({
                    name: "Не выбранно",
                    new_name: null,
                })
            },
            delInventory() {
                this.request.inventories.pop()
            },
        }
    }
</script>
