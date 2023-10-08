      <template>
            <div class="main-content">
                <div class="page-content">
                    <div class="container-fluid">
        
        
        
        
                        <div class="page-title-box">
                            <div class="row align-items-center">
                                <div class="col-md-8">
                                    <h6 class="page-title">Import Commandes</h6>
                                </div>
                                <div class="col-md-4">
                                    <div class="float-end d-md-block">
                                        <div class="dropdown">
                                            <a class="btn btn-primary btn-md" :href="'/src/assets/exemplare.xlsx'" download="Exemplaire.xlsx">Telecharger Exemplaire</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
        
        
                        <div v-if="data.length === 0" class="custom-file-upload">
                            <label class="custom-file-label">
                                <h2>importer un fichier Excel (.xlsx)</h2>
                            </label>
                            <input type="file" class="custom-file-input" @change="handleFileUpload" accept=".xlsx"
                                id="customFileInput" />
                        </div>
        
        
        
                        <div v-else>
        
                            <button_simple @click="re_upload" type="submit" Class_Content="col-md-2 p-3 "
                                btn_text="télécharger à nouveau" />
        
                            <div class="table-responsive card p-3 shadow">
                                <table class="table table-striped p-3 w-100">
                                    <thead class="bg-light">
                                        <tr>
                                            <th>Code</th>
                                            <th>Stock</th>
                                            <th>Destinataire</th>
                                            <th>Téléphone</th>
                                            <th>Ville</th>
                                            <th>Adresse</th>
                                            <th>ProduitsRef</th>
                                            <th>Qte</th>
                                            <th>Prix</th>
                                            <th>Ouvrir Colis</th>
                                            <th>Change</th>
                                            <th>Commentaire</th>
        
        
        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, rowIndex) in FormData" :key="row.Code">
                                            <td>
                                                <input_text v-model="FormData[rowIndex].Code" type="text" style="width: 10vw;"
                                                    Class_Content="col-md mb-3" :value="FormData[rowIndex].Code"
                                                    @update:value="FormData[rowIndex].Code = $event" placeholder="Date" />
        
                                                <div v-if="RowErrors[rowIndex] && RowErrors[rowIndex].Code" class="text-danger">
                                                    {{ RowErrors[rowIndex].Code[0] }}
                                                </div>
                                            </td>
                                            <td>
                                                <select id="Stock" class="form-control" style="width: 6vw;"
                                                    v-model="FormData[rowIndex].Stock">
                                                    <option value="1" :selected="FormData[rowIndex].Stock === 1">oui</option>
                                                    <option value="0" :selected="FormData[rowIndex].Stock === 0">Non</option>
        
        
                                                    <div v-if="RowErrors[rowIndex] && RowErrors[rowIndex].Stock"
                                                        class="text-danger">
                                                        {{ RowErrors[rowIndex].Stock }}
                                                    </div>
                                                </select>
        
                                            </td>
                                            <td>
                                                <input_text v-model="FormData[rowIndex].Destinataire" type="text"
                                                    style="width: 10vw;" Class_Content="col-md mb-3"
                                                    :value="FormData[rowIndex].Destinataire"
                                                    @update:value="FormData[rowIndex].Destinataire = $event" placeholder="Date" />
        
                                                <div v-if="RowErrors[rowIndex] && RowErrors[rowIndex].Destinataire"
                                                    class="text-danger">
                                                    {{ RowErrors[rowIndex].Destinataire[0] }}
                                                </div>
                                            </td>
                                            <td>
                                                <input_text v-model="FormData[rowIndex].Téléphone" type="text" style="width: 8vw;"
                                                    Class_Content="col-md mb-3" :value="FormData[rowIndex].Téléphone"
                                                    @update:value="FormData[rowIndex].Téléphone = $event" placeholder="Date" />
        
                                                <div v-if="RowErrors[rowIndex] && RowErrors[rowIndex].Téléphone"
                                                    class="text-danger">
                                                    {{ RowErrors[rowIndex].Téléphone[0] }}
                                                </div>
                                            </td>
                                            <td>
                                                <select id="cities" class="form-control" v-model="FormData[rowIndex].Ville"
                                                    style="width: 8vw;">
                                                    <option v-for="ville in Villes" :value="ville.id" :key="ville.id"
                                                        :selected="ville.Nom === FormData[rowIndex].Ville">
                                                        {{ ville.Nom }}
                                                    </option>
                                                </select>
        
                                                <div v-if="RowErrors[rowIndex] && RowErrors[rowIndex].Ville" class="text-danger">
                                                    {{ RowErrors[rowIndex].Ville[0] }}
                                                </div>
        
                                            </td>
                                            <td>
                                                <input_text v-model="FormData[rowIndex].Adresse" type="text" style="width: 12vw;"
                                                    Class_Content="col-md mb-3" :value="FormData[rowIndex].Adresse"
                                                    @update:value="FormData[rowIndex].Adresse = $event" placeholder="Date" />
        
                                                <div v-if="RowErrors[rowIndex] && RowErrors[rowIndex].Adresse" class="text-danger">
                                                    {{ RowErrors[rowIndex].Adresse[0] }}
                                                </div>
                                            </td>
                                            <td>
                                                <input_text v-model="FormData[rowIndex].Produits" type="text" style="width: 12vw;"
                                                    Class_Content="col-md mb-3" :value="FormData[rowIndex].Produits"
                                                    @update:value="FormData[rowIndex].Produits = $event" placeholder="Date" />
        
                                                <div v-if="RowErrors[rowIndex] && RowErrors[rowIndex].Produits" class="text-danger">
                                                    {{ RowErrors[rowIndex].Produits }}
                                                </div>
                                            </td>
                                            <td>
                                                <input_text v-model="FormData[rowIndex].Qte" type="text" Class_Content="col-md mb-3"
                                                    style="width: 5vw;" :value="FormData[rowIndex].Qte"
                                                    @update:value="FormData[rowIndex].Qte = $event" placeholder="Date" />
        
                                                <div v-if="RowErrors[rowIndex] && RowErrors[rowIndex].Qte" class="text-danger">
                                                    {{ RowErrors[rowIndex].Qte[0] }} </div>
        
                                            </td>
                                            <td>
                                                <input_text v-model="FormData[rowIndex].Prix" type="text" style="width: 7vw;"
                                                    Class_Content="col-md mb-3" :value="FormData[rowIndex].Prix"
                                                    @update:value="FormData[rowIndex].Prix = $event" placeholder="Date" />
        
                                                <div v-if="RowErrors[rowIndex] && RowErrors[rowIndex].Prix" class="text-danger">
                                                    {{ RowErrors[rowIndex].Prix[0] }} </div>
                                            </td>
                                            <td>
                                                <select id="Ouvrir" class="form-control" v-model="FormData[rowIndex].Ouvrir"
                                                    style="width: 6vw;">
                                                    <option value="1" :selected="FormData[rowIndex].Ouvrir === 1">oui</option>
                                                    <option value="0" :selected="FormData[rowIndex].Ouvrir === 0">Non</option>
        
        
                                                    <div v-if="RowErrors[rowIndex] && RowErrors[rowIndex].Ouvrir"
                                                        class="text-danger">
                                                        {{ RowErrors[rowIndex].Ouvrir }}
                                                    </div>
                                                </select>
        
                                            </td>
                                            <td>
                                                <select id="Change" class="form-control" v-model="FormData[rowIndex].Change"
                                                    style="width: 6vw;">
                                                    <option value="1" :selected="FormData[rowIndex].Change === 1">oui</option>
                                                    <option value="0" :selected="FormData[rowIndex].Change === 0">Non</option>
        
        
                                                    <div v-if="RowErrors[rowIndex] && RowErrors[rowIndex].Change"
                                                        class="text-danger">
                                                        {{ RowErrors[rowIndex].Change }}
                                                    </div>
                                                </select>
        
                                            </td>
                                            <td>
                                                <input_text v-model="FormData[rowIndex].Commentaire" type="text" style="width: 8vw;"
                                                    Class_Content="col-md mb-3" :value="FormData[rowIndex].Commentaire"
                                                    @update:value="FormData[rowIndex].Commentaire = $event" placeholder="Date" />
        
                                                <div v-if="RowErrors[rowIndex] && RowErrors[rowIndex].Commentaire"
                                                    class="text-danger">
                                                    {{ RowErrors[rowIndex].Commentaire[0] }} </div>
                                            </td>
        
                                        </tr>
        
                                    </tbody>
                                </table>
                            </div>
        
        
        
                            <div class="card d-flex align-items-end">
                                <button_simple @click="submitFormImport" type="submit" Class_Content="col-md-2 p-3 "
                                    btn_text="Modifier le Role" />
                            </div>
                        </div>
        
        
                    </div>
                </div>
            </div>
        </template>
        
        
        
        <style scoped>
        .custom-file-upload {
            position: relative;
            cursor: pointer;
            overflow: hidden;
        }
        
        .custom-file-label {
            width: 100%;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 20px;
            border: 2px dashed #3498db;
            border-radius: 5px;
            color: #3498db;
            background-color: #f7f9fb;
            transition: border-color 0.3s ease;
        }
        
        .custom-file-input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
        }
        
        .custom-file-label:hover {
            border: 2px dashed #2ecc71;
            color: #2ecc71;
        }
        </style>
        
        
        <script>
        import { read, utils } from 'xlsx';
        import { ref, onMounted } from 'vue'
        import { addData, fetchData, getRow } from '../../composition/crud.js'
        
        import heading from '../../components/brumbs/heading.vue'
        import checkd from '../../components/inputs/check.vue'
        import input_text from '../../components/inputs/input.vue'
        import button_simple from '../../components/buttons/simple.vue'
        import SelectDropdown from '../../components/inputs/select.vue'
        
        
        export default {
            components: {
                heading,
                input_text,
                button_simple,
                SelectDropdown,
            },
            data() {
                return {
                    headers: [], // To store Excel headers
                    data: [],
                    FormData: [],
                    RowErrors: [],
                    Villes: [],
                };
            },
        
            async mounted() {
                this.Villes = await fetchData("https://api.gestion-livraison.pro/api/cities")
        
                console.log(this.Villes)
            },
            methods: {
                handleFileUpload(event) {
                    const file = event.target.files[0];
        
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = e => {
                            const data = new Uint8Array(e.target.result);
                            const workbook = read(data, { type: 'array' });
        
                            // Assuming the first sheet is the one you want to work with
                            const sheetName = workbook.SheetNames[0];
                            const worksheet = workbook.Sheets[sheetName];
        
                            // Convert worksheet to array of objects
                            const excelData = utils.sheet_to_json(worksheet, { header: 1 });
                            this.headers = excelData[0]; // First row as headers
                            // this.data = excelData.slice(1).filter(row => row[10] !== '' && row[1] !== '' && row[4] !== '');  // Remaining rows as data
                            this.data = excelData.slice(1).filter(row => {
                                const dropdownValue = row[1];
                                const cityValue = row[4];
                                const produitsValue = row[6];
        
                                return dropdownValue && cityValue && produitsValue; // Check for non-empty values
                            });
                            this.FormData = [];
                            this.data.forEach((row, rowIndex) => {
                                const order = {
                                    Code: row[0] || '', // Use an empty string if Code is undefined
                                    Stock: null,
                                    Destinataire: row[2] || '', // Use an empty string if Destinataire is undefined
                                    Adresse: row[5] || '', // Use an empty string if Adresse is undefined
                                    Ville: '',
                                    Téléphone: row[3] || '', // Use an empty string if Téléphone is undefined
                                    Produits: row[6] || '', // Use an empty string if Produits is undefined
                                    Qte: row[7] || '', // Use an empty string if Qte is undefined
                                    Prix: row[8] || '', // Use an empty string if Prix is undefined
                                    Ouvrir: row[9] || '', // Use an empty string if Prix is undefined
                                    Change: row[10] || '', // Use an empty string if Prix is undefined
                                    Commentaire: row[11] || '', // Use an empty string if Commentaire is undefined
                                };
        
        
                                if (row[1] === "Oui") {
                                    order.Stock = 1
                                } else if (row[1] === "Non") order.Stock = 0
        
                                if (row[9] === "Oui") {
                                    order.Ouvrir = 1
                                } else if (row[9] === "Non") order.Ouvrir = 0
        
                                if (row[10] === "Oui") {
                                    order.Change = 1
                                } else if (row[10] === "Non") order.Change = 0
        
                                for (const vl of this.Villes) {
                                    if (vl.Nom === row[4]) {
                                        order.Ville = vl.id;
                                        break;
                                    }
                                }
        
                                this.FormData.push(order);
                            });
                            console.log(this.FormData)
        
        
                        };
        
                        reader.readAsArrayBuffer(file);
                    }
                },
                re_upload() {
                    this.data = []
                    this.headers = []
                    this.FormData = []
        
                },
                async submitFormImport() {
                    console.log({ "orders": this.FormData })
        
                    const res = await addData("https://api.gestion-livraison.pro/api/orders/import", { "orders": this.FormData });
                    /* if (res.problematic_orders) {
                         alertify.error('There are problematic orders. Please check the table for details.');
                         this.FormData = res.problematic_orders;
                     } else {
                         this.FormData = [];
                     }*/
                    if (res.problematic_orders) {
                        alertify.error('There are problematic orders. Please check the table for details.');
        
                        this.FormData = res.problematic_orders.map(problematicOrder => problematicOrder.data);
                        this.RowErrors = res.problematic_orders.reduce((errors, problematicOrder) => {
                            errors.push(problematicOrder.errors);
                            return errors;
                        }, []);
                        console.log(this.RowErrors)
                    } else {
                        this.FormData = [];
                        this.RowErrors = [];
                    }
                }
            }
        };
        
        
        </script>