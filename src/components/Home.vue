<template>

    <div class="row">

        <div class="col-12 col-sm-12 col-xs-12">
            <!-- Header -->
        <div class="jumbotron jumbotron-fluid mt-2">
            <h1 class="display-3">Shuttle Calculator</h1>
            <p class="lead">This system is to calculate total fees for each person every badminton match</p>
            <hr class="my-4">
        </div>

        <!-- Content -->

        <div class="mt-4">
            <div class="row">
                <div class="col-12 col-xs-12 col-sm-6 col-md-8">
                    <h1 class="display-5">Recent Matches</h1>
                </div>
                <div class="col-12 col-xs-12 col-sm-4 col-md-4">
                    <router-link to="/event/create"><button type="button" class="btn btn-success  float-right">Create New Event</button></router-link>
                </div>
            </div>

            <div class="col-12">
                <div>
                    <ul class="pagination">
                        <li v-bind:class="[{disabled: !pagination.prev_page_url}]" class="page-item">
                        <a class="page-link" href="#" @click="fetchEvents(pagination.prev_page_url)">&laquo;</a>
                        </li>

                        <li class="page-item disabled">
                        <a class="page-link text-dark" href="#">Page {{pagination.current_page}} of {{pagination.last_page}}</a>
                        </li>
                        
                        <li v-bind:class="[{disabled: !pagination.next_page_url}]" class="page-item">
                        <a class="page-link" href="#" @click="fetchEvents(pagination.next_page_url)">&raquo;</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="col-12 table-responsive-sm">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Event Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="e in events" :key="e.id" @click="viewEvent(e.id)">
                            <td>{{ e.name }}</td>
                            <td>{{ e.place }}</td>
                            <td>{{ e.dateEvent }}</td>
                            <td>{{ e.timeEvent }}</td>
                        </tr>
                    </tbody>
                </table> 
            </div>

        
        </div>
        </div>

    
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            events: [],
            pagination: {}
        }
    },
    created() {
        this.fetchEvents();
    },
    methods: {
        fetchEvents(page_url) {
            let vm = this;
            page_url = page_url || 'http://shuttlecalculator.test/api/events'
            this.axios.get(page_url)
            .then((response) => {
                this.events = response.data.data;
                vm.makePagination(response.data.meta, response.data.links);
            })
        },
        makePagination(meta,links) {
            let pagination = {
                current_page: meta.current_page,
                last_page: meta.last_page,
                next_page_url: links.next,
                prev_page_url: links.prev
            }

            this.pagination = pagination;
        },
        viewEvent(id) {
            this.$router.push(`event/${id}`);
        }
    }
}
</script>
