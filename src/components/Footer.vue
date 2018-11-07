<template>
    <div id="cp-footer" class="footer-v1">
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-3">
                        <a href="index.html">
                            <img 
                                id="logo-footer" 
                                class="footer-logo w-50 mb-0 mx-2" 
                                v-bind:src="data.settings.peronal_logo" 
                                alt="">
                            <p class="oldsh">natanaelfneto</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-12 print-col-lg-3">
                        <div class="headline">
                            <h2>Contato</h2>
                        </div>
                        <address class="my-md-0">
                            <div>
                                <span aria-hidden="true" class="icon-pointer"></span>
                                <span>Natal, RN</span>
                            </div>
                            <div>
                                <span aria-hidden="true" class="icon-call-out"></span>
                                <span>+55 (62) 982-176-644</span>
                            </div>
                            <div>
                                <i class="fa_ fa-whatsapp"></i>
                                <span>+55 (62) 982-176-644</span>
                            </div>
                            <div>
                                <span aria-hidden="true" class="icon-link"></span>
                                <a href="https://natanaelfneto.com" class="">natanaelfneto.com</a>
                            </div>
                        </address>
                    </div>
                    <div class="col-lg-3 col-md-12 print-col-lg-3 mt-lg-4 print-mt-lg-4 mt-md-0">
                        <div class="headline mt-4 d-none d-lg-block print-d-lg-block"></div>
                        <address class="my-md-0">
                            <div>
                                <span aria-hidden="true" class="icon-paper-plane ml-auto"></span>
                                <a href="https://t.me/natanaelfneto" target="_blank">
                                    @natanaelfneto
                                </a>
                            </div>
                            <div>
                                <i class="fa_ fa-twitter"></i>
                                <a href="https://twitter.com/natanaelfneto" target="_blank">
                                    @natanaelfneto
                                </a>
                            </div>
                            <div>
                                <i class="fa_ fa-instagram"></i>
                                <a href="https://www.instagram.com/natanaelfneto/" target="_blank">
                                    @natanaelfneto
                                </a>
                            </div>
                            <div>
                                <i class="fa_ fa-skype"></i>
                                <a href="#/" class="">
                                    natanaelfneto@outlook.com
                                </a>
                            </div>
                        </address>
                    </div>
                    <div class="col-lg-3 col-md-12 print-col-lg-3 mt-lg-4 print-mt-lg-4 mt-md-0">
                        <div class="headline mt-4 d-none d-lg-block print-d-lg-block"></div>
                        <address class="mt-4 my-md-0">
                            <div>
                                <i class="fa_ fa-github"></i>
                                <a href="https://github.com/natanaelfneto" target="_blank">
                                    github.com/natanaelfneto
                                </a>
                            </div>
                            <div>
                                <i class="fa_ fa-linkedin"></i>
                                <a href="https://www.linkedin.com/in/natanaelfneto/" target="_blank">
                                    linkedin.com/in/natanaelfneto
                                </a>
                            </div>
                            <div>
                                <span aria-hidden="true" class="icon-envelope"></span>
                                <a href="mailto:natanaelfneto@outlook.com" class="">
                                    natanaelfneto@outlook.com
                                </a>
                            </div>
                            <div>
                                <span aria-hidden="true" class="icon-envelope"></span>
                                <a href="mailto:natanaelfreitasneto@gmail.com" class="">
                                    natanaelfreitasneto@gmail.com
                                </a>
                            </div>
                        </address>
                    </div>
                </div>
            </div>
        </div><!--/footer-->

        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 ml-auto">
                        <p class="text-right print-d-none">
                            2018 &copy; All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div><!--/copyright-->
    </div>
</template>

<script>
    export default {
        components: {
        },
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    .oldsh {
        font-size: 1.5rem;
    }
</style>