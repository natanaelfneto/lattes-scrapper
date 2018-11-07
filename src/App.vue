<template>
    <router-view :data="data"></router-view>
</template>

<script>
    import axios from 'axios';
    import data from '../data.json';

    export default {
        name: 'natanaelfneto',
        data: function() {
            return data
        },
        methods: {
            getGithubData(login) {

                let url = 'https://api.github.com/users/'+login;
                axios.get(url)
                .then(res => { 
                    this.data.sidebar.github.object.user = res.data;
                });

                let repos = [];
                this.data.sidebar.github.object.featured_repos.forEach(function (repo) {
                    let repo_url = 'https://api.github.com/repos/'+login+'/'+repo.name;
                    axios.get(repo_url)
                    .then(res => { repos.push(res.data) })
                });
                this.data.sidebar.github.object.featured_repos = repos;

                let orgs_url = url+'/orgs';
                axios.get(orgs_url)
                .then(res => { 
                    let orgs = [];
                    res.data.forEach(function (org) { 
                        let org_url = 'https://api.github.com/orgs/'+org.login;
                        axios.get(org_url)
                        .then(res => {
                            orgs.push(res.data);
                        });
                    });
                    this.data.sidebar.github.object.orgs = orgs;
                });
            },
        },
        created: function() {
            this.getGithubData(this.data.sidebar.github.object.user.login);
        }
    }
</script>

<style>
    :root {
        /* fade blue */
        --first-color: #1795a1;

        /* fade orange */
        --second-color: #c99900;

        /* fade dark gray */
        --third-color: #272727;
    }
    a {
        color: var(--first-color);
    }
    a:hover {
        color: var(--second-color);
    }
    .headline h2,
    .headline h3,
    .headline h4 {
	    border-bottom: 2px solid var(--second-color);
    }
    .oldsh {
        font-family: 'Old Style';
    }
    @media print {
        #cp-resume {
            margin-top: 0rem !important;
        } 
        #cp-published {
            margin-top: 1rem !important;
        }
        .breadcrumbs-v1, .badge {
            -webkit-print-color-adjust: exact;
        }
        #cp-resume, #cp-published {
            transform: scale(1.05);
        }
        .print-d-none, #cp-github, #ContentTab, .btn, .nav-item {
            display: none;
        }
        .print-mt {
            margin-top: 1rem !important;
        }
        .print-mb {
            margin-bottom: 1rem !important;
        }
        .print-col-lg-3 {
            flex: 0 0 25% !important;
            max-width: 25% !important;
        }
        .print-mt-lg-4 {
            margin-top: 1.5rem !important;
        }
        .print-d-lg-block, img {
            display: block !important;
        }
        address {
            margin-top: 1.5rem !important;
        }
        a {
            text-decoration: none !important;
        }
        div, p, a {
            color: black;
        }
        li.ml-auto.print {
            margin-left: 1rem !important;
        }
        li.mr-auto.print {
            margin-right: 1rem !important;
        }
        .print-col-12 {
            width: 100% !important;
        }
        .news-v3 .news-v3-in {
            padding-bottom: 1rem !important;
            padding-top: 1rem !important;
        }
        .print-place {
            position: relative !important;
            left: -1rem !important;
            margin-top: 5px !important;
        }
        .print-place>div>span {
            font-weight: bold !important;
            color: gray !important;
        }
        .print-mb-md-0, .news-v3-in>ul, .news-v3-in>p {
            margin-bottom: 0 !important;
        }
        .print-my-0 {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
        }
        .print-mb-0 {
            margin-bottom: 0 !important;
        }
        .print-py {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
        }
        .hr {
            margin-top: 0rem !important;
            display: block !important;
        }
        .headline>h2 {
            font-weight: bold !important;
            color: black !important;
        }
        .footer, p {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
    }
</style>










