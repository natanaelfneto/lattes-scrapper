<template>
    <div id="app-client-index">

        <!-- Index Head -->
		<Breadcrumbs :data="data"></Breadcrumbs>

        <!-- Index Body -->
		<div class="bg-color-light">
			<div class="container content-sm">
				<div class="row">

                    <!-- Index Body Sidebar -->
					<div class="col-lg-3 col-md-12">
                        <Sidebar :data="data"></Sidebar>
					</div>
                    <!-- Index Body Content -->
					<div class="col-lg-9 col-md-12">
                        <ul class="nav nav-pills mb-3 mt-4 print-my-0" id="ContentTab" role="tablist">
                            <li class="nav-item px-2">
                                <a 
                                    class="nav-link bg-fade-blue active" 
                                    id="resume_tab" 
                                    ref="resume_tab" 
                                    data-toggle="tab" 
                                    href="#resume" 
                                    role="tab" 
                                    aria-controls="resume" 
                                    aria-selected="true">
                                    Experiências
                                </a>
                            </li>
                            <li class="nav-item px-2">
                                <a 
                                    class="nav-link bg-fade-blue" 
                                    id="published_tab" 
                                    ref="published_tab" 
                                    data-toggle="tab" 
                                    href="#published" 
                                    role="tab" 
                                    aria-controls="published" 
                                    aria-selected="false">
                                    Publicações
                                </a>
                            </li>
                            <li class="nav-item px-2">
                                <a 
                                    class="nav-link bg-fade-blue" 
                                    id="patent_tab" 
                                    ref="patent_tab" 
                                    data-toggle="tab" 
                                    href="#patent" 
                                    role="tab" 
                                    aria-controls="patent" 
                                    aria-selected="false">
                                    Patentes
                                </a>
                            </li>
                            <li
                                class="nav-item px-2 ml-auto">
                                <a
                                    @click.stop.prevent="printPage()"
                                    class="btn btn-secondary text-light"
                                    role="button" aria-disabled="true">
                                    PDF
                                    <span aria-hidden="true" class="ml-2 icon-printer"></span>
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div 
                                class="tab-pane fade show active" 
                                id="resume" 
                                ref="resume" 
                                role="tabpanel" 
                                aria-labelledby="resume_tab">
                                <div class="d-lg-none headline-v2 mb-4 mt-4 print-my-0">
                                    <h2>Experiências Profissionais</h2>
                                </div>
                                <Resume
                                    :data="data"
                                    :item="item"
                                    v-if="data.content.experiences.is_enabled"
                                    v-for="item in data.content.experiences.object">
                                </Resume>
                            </div>
                            <div
                                class="tab-pane fade" 
                                id="published" 
                                ref="published" 
                                role="tabpanel" 
                                aria-labelledby="published_tab">
                                <div class="d-lg-none headline-v2 mb-4 mt-5">
                                    <h2>Publicações</h2>
                                </div>
                                <Published
                                    :data="data"
                                    :item="item"
                                    v-if="data.content.published.is_enabled"
                                    v-for="item in data.content.published.object">>
                                </Published>
                            </div>
                            <div 
                                class="row px-2 tab-pane fade" 
                                id="patent" 
                                ref="patent" 
                                role="tabpanel" 
                                aria-labelledby="patent_tab">
                                <div class="mx-2 col-12 d-lg-none headline-v2 mb-4 mt-2 print-my-0">
                                    <h2>Patentes</h2>
                                </div>
                                <Patent
                                    :data="data"
                                    :item="item"
                                    v-if="data.content.patent.is_enabled"
                                    v-for="item in data.content.patent.object">>
                                </Patent>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</div>

        <!-- Index Footer -->
        <Footer :data="data"></Footer>

    </div>
</template>

<script>
    import Breadcrumbs from '../../components/Breadcrumbs.vue'
    import Footer from '../../components/Footer.vue'
    import Patent from '../../components/Patent.vue'
    import Published from '../../components/Published.vue'
    import Resume from '../../components/Resume.vue'
    import Sidebar from '../../components/Sidebar.vue'

    export default {
        name: "Index",
        components: {
            Breadcrumbs,
            Footer,
            Patent,
            Published,
            Resume,
            Sidebar
        },
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        methods: {
            printPage: function() {
                this.$refs.resume.setAttribute('class', 'tab-pane fade show active')
                this.$refs.published.setAttribute('class', 'tab-pane fade show active')
                this.$refs.patent.setAttribute('class', 'tab-pane fade show active')
                window.print();
                this.$refs.published.setAttribute('class', 'tab-pane fade')
                this.$refs.patent.setAttribute('class', 'tab-pane fade')
                this.$refs.resume_tab.setAttribute('class', 'nav-link bg-fade-blue active')
                this.$refs.published_tab.setAttribute('class', 'nav-link bg-fade-blue')
                this.$refs.patent_tab.setAttribute('class', 'nav-link bg-fade-blue')
            }
        },
    }
</script>

<style>
    .bg-fade-blue {
        color: #17a2b8;
        background-color: transparent;
        background-image: none;
        border: 1px solid;
        border-color: var(--first-color) !important;
    }
    .bg-fade-blue.active {
        background-color: var(--first-color) !important;
    }
    .tab-content>.row.active {
        display: flex !important;
    }
    .nav-tabs .nav-link {
        border-bottom-color: #dee2e6;
    }
    @media (min-width: 980px) {
        .container {
            max-width: 1024px !important;
        }
    }
    @media (min-width: 1200px) {
        .container {
            max-width: 1140px !important;
        }
    }
</style>