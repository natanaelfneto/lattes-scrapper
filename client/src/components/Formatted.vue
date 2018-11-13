<template>
    <div id="cp-formatted">
        </ul>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">
                        <span><b>username:</b></span>
                        <span>{{ data.user.name }}</span>
                    </li>
                </ol>
                <ol class="breadcrumb" v-if="Object.keys(data.user.references).length > 1">
                    <li 
                        v-for="reference, index in data.user.references"
                        class="breadcrumb-item active" 
                        aria-current="page">
                        <span v-if="index == 0"><b>references:</b></span>
                        <span>{{ reference }}</span>
                    </li>
                </ol>
                <ol class="breadcrumb" v-else>
                    <li 
                        class="breadcrumb-item active" 
                        aria-current="page">
                        <span><b>references:</b></span>
                        <span>{{ data.user.references[0] }}</span>
                    </li>
                </ol>
            </nav>
            <div
                v-for="academic in data.user.academics"
                v-if="data.user.academics.length > 1"
                class="card mb-3">
                <div class="card-header">
                    <b>{{ academic.year }}</b>
                    {{ academic.degree }}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ academic.thesis }}</h5>
                    <blockquote class="blockquote mb-0">
                        <p v-if="academic.advisor">
                            <span>Orientação:</span>
                            <span>{{ academic.advisor }}</span>
                        </p>
                        <div v-for="area in academic.areas">
                            <small>{{ area }}</small>
                        </div>
                        <footer class="blockquote-footer mt-3">
                            <span>{{ academic.institution }}</span>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </ul>
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
        }
    }
</script>