<template>
    <div
        class="app-page"
    >
        <AppPlugLoading v-if="isLoading" />
        <AppPlug404 v-if="is404Plug && !isLoading" />
        <section 
            v-if="isPageDataLoaded && !isLoading" 
            class="app-page__content"
        >
            <div class="exchange">
                <div>
                    Конвертер валют. Выбранный курс: {{ selectedExchangeValue }} р. за 1 ед.
                </div>
                <input 
                    v-model="startValue"
                    @input="setResultValue"
                    placeholder="Введите кол-во валюты"
                    type="text"
                    class="exchange__input-value ui-input"
                >
                <p 
                    @click="openSelect"
                    class="exchange__selected-desc fake-input"
                >
                    {{ selectedExchangeDesc }}
                </p>
                <div class="exchange__select-wrapper">
                    <ul
                        v-if="isSelectOpen"
                        class="exchange__select-list"
                    >
                        <li 
                            v-for="(item, index) in appPageData.Valute"
                            :key="index"
                            @click="selectValue(item)"
                            class="fake-input"
                        >
                            {{ index }}
                        </li>
                    </ul>
                </div>
                <div class="exchange__result-wrapper">
                    <input 
                        v-model="exchangeResult"
                        @input="setStartValue"
                        placeholder="Итого"
                        type="tel"
                        class="ui-input"
                    />
                    <span>руб.</span>
                </div>
            </div>
        </section>

    </div>
</template>

<script>

import {ref, unref, computed} from "vue"
import AppPlug404 from "./AppPlug404.vue"
import AppPlugLoading from "./AppPlugLoading.vue"
import {useApi} from "@/components/features/useApi"

export default {
    name: "PageHome",
    components: {
        AppPlug404,
        AppPlugLoading
    },
    mounted() {

    },
    setup( ){
        const {
            appPageData,
            isPageDataLoaded,
            is404Plug,
            isLoading,
        } = useApi('')

        const startValue = ref(0)
        const exchangeResult = ref(0)
        const isSelectOpen = ref(false)
        const savedCurrency = ref(localStorage.currency)

        const getValuteDesc = (currency) => {
            return `${unref(appPageData).Valute[currency]['Name']} (${unref(appPageData).Valute[currency]['CharCode']})`
        }

        const selectedExchangeValue = computed(() => {
            return unref(savedCurrency) ? +(unref(appPageData).Valute[unref(savedCurrency)]['Value'] / unref(appPageData).Valute[unref(savedCurrency)]['Nominal']).toFixed(2) : 0
        })      

        const selectedExchangeDesc = computed(() => {
            return unref(savedCurrency) ? getValuteDesc(unref(savedCurrency)) : 'Выберите валюту'
        }) 

        const openSelect = () => {
            isSelectOpen.value = true
        }

        const setResultValue = () => {
            exchangeResult.value = +(unref(startValue) * unref(selectedExchangeValue)).toFixed(2)
        }

        const setStartValue = () => {
            startValue.value = +(unref(exchangeResult) / unref(selectedExchangeValue)).toFixed(2)
        }

        const selectValue = (item) => {
            isSelectOpen.value = false
            localStorage.currency = item['CharCode']
            savedCurrency.value = localStorage.currency
            setResultValue()
        }

        return {
            appPageData,
            isPageDataLoaded,
            is404Plug,
            isLoading,
            isSelectOpen,
            startValue,
            exchangeResult,
            selectedExchangeValue,
            selectedExchangeDesc,
            openSelect,
            selectValue,
            setResultValue,
            setStartValue
        }
    },

}
</script>

<style lang="scss" scoped>
    @import "../assets/variables";
    @import "../components/styles/pageHome/app-page-home";
</style>