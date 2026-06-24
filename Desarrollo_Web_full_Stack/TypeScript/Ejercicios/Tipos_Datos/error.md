Tabla sql:



-- Volcando estructura para tabla frios_db.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `codigo` varchar(50) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL DEFAULT 0.00,
  `stock` int(11) NOT NULL DEFAULT 0,
  `id_marca` bigint(20) DEFAULT NULL,
  `id_medida` bigint(20) DEFAULT NULL,
  `id_categoria` bigint(20) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `usuario_crea` varchar(255) DEFAULT NULL,
  `fecha_crea` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_edit` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`codigo`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla frios_db.productos: ~2 rows (aproximadamente)
INSERT INTO `productos` (`codigo`, `nombre`, `descripcion`, `precio`, `stock`, `id_marca`, `id_medida`, `id_categoria`, `status`, `usuario_crea`, `fecha_crea`, `fecha_edit`) VALUES
	('1329349492939', 'ACEITE REFRIGERANTE', 'PROBANDOOOO', 6700000.00, 4, 5, 5, 3, 'activo', 'Administrador Todo En Frios (1110460410)', '2026-01-03 20:13:21', '2026-01-05 10:02:17'),
	('2330345546045', 'ACEITE TIPO 2', 'PROBANDOOO MODULO', 60000.00, 6, 7, NULL, 3, 'activo', 'Administrador Todo En Frios (1110460410)', '2026-01-03 20:31:14', '2026-01-05 10:02:17');



productos.php:


<?php
$titlePage = "Lista de Artículos";
require_once "../components/sidebar.php";

// 1. CONSULTAS ADICIONALES PARA LOS SELECTS
$getMarcas = $connection->prepare("SELECT id, nombre FROM marcas WHERE status = 'activo' ORDER BY nombre ASC;");
$getMarcas->execute();
$marcas = $getMarcas->fetchAll(PDO::FETCH_ASSOC);

$getCategorias = $connection->prepare("SELECT c.id, c.nombre FROM categorias AS c WHERE c.estado = 'activo' AND c.tipo_categoria = 'PRODUCTO' ORDER BY nombre ASC;");
$getCategorias->execute();
$categorias = $getCategorias->fetchAll(PDO::FETCH_ASSOC);

$getMedidas = $connection->prepare("SELECT id, medida FROM medidas ORDER BY medida ASC;");
$getMedidas->execute();
$medidas = $getMedidas->fetchAll(PDO::FETCH_ASSOC);

$estados_sena = $connection->prepare("SELECT * FROM estados");
$estados_sena->execute();
$estados_se = $estados_sena->fetchAll(PDO::FETCH_ASSOC);

// Consulta para obtener todos los productos
$getProducts = $connection->prepare("SELECT p.*, m.nombre AS nombre_marca, c.nombre AS nombre_categoria, med.medida AS nombre_medida FROM productos AS p INNER JOIN marcas AS m ON m.id = p.id_marca INNER JOIN categorias AS c ON c.id = p.id_categoria LEFT JOIN medidas AS med ON med.id = p.id_medida ORDER BY p.fecha_crea DESC;");
$getProducts->execute();
$products = $getProducts->fetchAll(PDO::FETCH_ASSOC);
?>
<div class="content-wrapper">
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="card mb-3">
            <h2 class="card-header font-bold text-center">Inventario de Productos</h2>
            <div class="card-body">
                <div class="row gy-3 mb-3">
                    <div class="col-lg-2 col-md-6">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#formProductos">
                            <i class="bx bx-plus-circle"></i> Registrar
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered top-table example" cellspacing="0"
                                width="100%" id="tablaProductos">
                                <thead>
                                    <tr>
                                        <th style="width: 10%;">Acciones</th>
                                        <th style="width: 20%;">Código</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cant.</th>
                                        <th>Marca</th>
                                        <th>Categoría</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php foreach ($products as $product): ?>
                                    <tr data-id="<?= htmlspecialchars($product['codigo']) ?>"
                                        data-codigo="<?= htmlspecialchars($product['codigo']) ?>"
                                        data-nombre="<?= htmlspecialchars($product['nombre']) ?>"
                                        data-descripcion="<?= htmlspecialchars($product['descripcion'] ?? '') ?>"
                                        data-precio="<?= htmlspecialchars($product['precio']) ?>"
                                        data-stock="<?= htmlspecialchars($product['stock']) ?>"
                                        data-id_marca="<?= htmlspecialchars($product['id_marca']) ?>"
                                        data-id_medida="<?= htmlspecialchars($product['id_medida'] ?? '') ?>"
                                        data-id_categoria="<?= htmlspecialchars($product['id_categoria']) ?>"
                                        data-status="<?= htmlspecialchars($product['status']) ?>">
                                        <td>
                                            <div class="d-flex flex-row gap-2">
                                                <button class="btn btn-icon btn-primary btn-edit" type="button"
                                                    title="Actualizar Producto">
                                                    <i class="bx bx-refresh"></i>
                                                </button>

                                                <form method="POST" action="" name="formDeleteProduct"
                                                    onsubmit="return confirm('¿Estás seguro de eliminar del registro?');">
                                                    <input type="hidden" name="id_producto"
                                                        value="<?= htmlspecialchars($product['codigo']) ?>">
                                                    <button class="btn btn-icon btn-danger" type="submit"
                                                        title="Eliminar" data-bs-toggle="tooltip" data-bs-offset="0,6"
                                                        data-bs-placement="top" data-bs-html="true"
                                                        data-bs-original-title="Eliminar">
                                                        <i class="bx bx-trash"></i>
                                                    </button>
                                                    <input type="hidden" value="formDeleteProduct"
                                                        name="MM_formDeleteProduct">
                                                </form>
                                            </div>
                                        </td>
                                        <td><?= htmlspecialchars($product['codigo']) ?></td>
                                        <td><?= htmlspecialchars($product['nombre']) ?></td>
                                        <td>$ <?= number_format($product['precio'], 2) ?></td>
                                        <td><?= htmlspecialchars($product['stock']) ?>
                                            <?= htmlspecialchars($product['nombre_medida'] ?? 'N/A') ?></td>
                                        <td><?= htmlspecialchars($product['nombre_marca']) ?></td>
                                        <td><?= htmlspecialchars($product['nombre_categoria']) ?></td>
                                        <td>
                                            <span
                                                class="badge <?= $product['status'] === 'activo' ? 'bg-label-primary' : 'bg-label-danger' ?>">
                                                <?= htmlspecialchars($product['status']) ?>
                                            </span>
                                        </td>
                                    </tr>
                                    <?php endforeach; ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- MODAL REGISTRAR PRODUCTO CON IMÁGENES -->
    <div class="modal fade" id="formProductos" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <form action="" method="POST" enctype="multipart/form-data" autocomplete="off" name="formRegisterProduct">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel1">Registrar Producto</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <div class="row g-3">
                            <!-- CÓDIGO -->
                            <div class="form-group col-lg-6">
                                <label class="form-label" for="codigo">Código</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text">
                                        <i class='bx bx-barcode'></i>
                                    </span>
                                    <input type="text" required autofocus class="form-control" name="codigo" id="codigo"
                                        placeholder="Ingresa código" maxlength="13" pattern="[0-9]{8,13}"
                                        title="Ingresa un código de barras válido (8 a 13 dígitos numéricos)"
                                        oninput="this.value = this.value.replace(/[^0-9]/g, '')" />
                                </div>
                            </div>

                            <!-- NOMBRE -->
                            <div class="form-group col-lg-6">
                                <label class="form-label" for="nombre">Nombre del Producto</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text">
                                        <i class='bx bx-tag'></i>
                                    </span>
                                    <input type="text" required class="form-control" name="nombre" id="nombre"
                                        placeholder="Ingresa nombre" oninput="this.value = this.value.toUpperCase();" />
                                </div>
                            </div>

                            <!-- CATEGORÍA -->
                            <div class="form-group col-lg-6">
                                <label for="id_categoria" class="form-label">Categoría
                                    <a href="categorias.php" target="_blank" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Ir a Gestión de Categorías">
                                        <i class="bx bx-plus-circle"></i>
                                    </a>
                                </label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text">
                                        <i class="bx bx-menu"></i>
                                    </span>
                                    <select class="form-select" name="id_categoria" id="id_categoria" required>
                                        <option value="">Seleccionar Categoría...</option>
                                        <?php foreach ($categorias as $categoria): ?>
                                        <option value="<?= $categoria['id'] ?>">
                                            <?= htmlspecialchars($categoria['nombre']) ?>
                                        </option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                            </div>

                            <!-- MARCA -->
                            <div class="form-group col-lg-6">
                                <label for="id_marca" class="form-label">Marca
                                    <a href="marcas.php" target="_blank" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Ir a Gestión de Marcas">
                                        <i class="bx bx-plus-circle"></i>
                                    </a>
                                </label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text">
                                        <i class="bx bx-purchase-tag"></i>
                                    </span>
                                    <select class="form-select" name="id_marca" id="id_marca" required>
                                        <option value="">Seleccionar Marca...</option>
                                        <?php foreach ($marcas as $marca): ?>
                                        <option value="<?= $marca['id'] ?>">
                                            <?= htmlspecialchars($marca['nombre']) ?>
                                        </option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                            </div>

                            <!-- PRECIO -->
                            <div class="form-group col-lg-4">
                                <label class="form-label" for="precio">Valor Unitario</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text">
                                        <i class='bx bx-dollar'></i>
                                    </span>
                                    <input type="number" required class="form-control" name="precio" id="precio"
                                        placeholder="0.00" step="0.01" min="0" />
                                </div>
                            </div>

                            <!-- STOCK -->
                            <div class="form-group col-lg-4">
                                <label class="form-label" for="modal_stock">Stock</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="bx bx-box"></i></span>
                                    <input type="number" required class="form-control" name="stock" id="modal_stock"
                                        min="1" />
                                </div>
                                <small class="text-muted">Debe ser mayor a 0</small>
                            </div>

                            <!-- TIPO DE MEDIDA -->
                            <div class="form-group col-lg-4">
                                <label for="id_medida" class="form-label">Tipo de Medida
                                    <a href="medidas.php" target="_blank" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Ir a Gestión de Medidas">
                                        <i class="bx bx-plus-circle"></i>
                                    </a>
                                </label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text">
                                        <i class="bx bx-ruler"></i>
                                    </span>
                                    <select class="form-select" name="id_medida" id="id_medida">
                                        <option value="">Seleccionar Medida...</option>
                                        <?php foreach ($medidas as $medida): ?>
                                        <option value="<?= $medida['id'] ?>">
                                            <?= htmlspecialchars($medida['medida']) ?>
                                        </option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                            </div>

                            <!-- ESTADO -->
                            <div class="form-group col-lg-12">
                                <label for="status" class="form-label">Estado Inicial</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text">
                                        <i class="bx bx-check-circle"></i>
                                    </span>
                                    <select class="form-select" name="status" id="status" required>
                                        <option value="">Seleccionar...</option>
                                        <?php if (empty($estados_se)): ?>
                                        <option value="">No hay datos...</option>
                                        <?php else: ?>
                                        <?php foreach ($estados_se as $estado_se): ?>
                                        <option value="<?= htmlspecialchars($estado_se['estado']) ?>">
                                            <?= htmlspecialchars($estado_se['estado']) ?>
                                        </option>
                                        <?php endforeach; ?>
                                        <?php endif; ?>
                                    </select>
                                </div>
                            </div>

                            <!-- DESCRIPCIÓN -->
                            <div class="form-group col-lg-12">
                                <label class="form-label" for="descripcion">Descripción</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text">
                                        <i class="bx bx-align-left"></i>
                                    </span>
                                    <textarea class="form-control" name="descripcion" id="descripcion"
                                        placeholder="Descripción del producto (opcional)" rows="3"></textarea>
                                </div>
                            </div>

                            <!-- ========================================= -->
                            <!-- NUEVO: CARGA DE IMÁGENES -->
                            <!-- ========================================= -->
                            <div class="form-group col-lg-12">
                                <label class="form-label" for="imagenes">Imágenes del Producto</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                        <i class="bx bx-image"></i>
                                    </span>
                                    <input type="file" class="form-control" name="imagenes[]" id="imagenes"
                                        accept="image/jpeg,image/jpg,image/png,image/gif,image/webp" multiple>
                                </div>
                                <small class="text-muted">
                                    <i class="bx bx-info-circle"></i> Máximo 3 imágenes. Tamaño total máximo: 10KB.
                                    Formatos: JPG, PNG, GIF, WEBP
                                </small>
                                <div id="preview-imagenes" class="mt-2 d-flex gap-2 flex-wrap"></div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                            <i class="bx bx-home"></i> Cancelar
                        </button>
                        <button type="submit" class="btn btn-primary">
                            <i class="bx bx-edit"></i> Registrar
                        </button>
                        <input type="hidden" value="formRegisterProduct" name="MM_formRegisterProduct">
                    </div>
                </div>
            </form>
        </div>
    </div>


    <!-- MODAL ACTUALIZAR PRODUCTO CON IMÁGENES -->
    <div class="modal fade" id="modalUpdateProduct" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <form action="" method="POST" enctype="multipart/form-data" autocomplete="off"
                name="formUpdateProductModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Actualizar Producto</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row g-3">
                            <input type="hidden" id="modal_id_producto" name="id_producto" />
                            <input type="hidden" id="modal_codigo_original" name="codigo_original" />

                            <!-- CÓDIGO -->
                            <div class="form-group col-lg-6">
                                <label class="form-label" for="modal_codigo">Código</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="bx bx-barcode"></i></span>
                                    <input type="text" required class="form-control" name="codigo" id="modal_codigo"
                                        oninput="this.value = this.value.toUpperCase();" />
                                </div>
                            </div>

                            <!-- NOMBRE -->
                            <div class="form-group col-lg-6">
                                <label class="form-label" for="modal_nombre">Nombre</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="bx bx-tag"></i></span>
                                    <input type="text" required class="form-control" name="nombre" id="modal_nombre"
                                        oninput="this.value = this.value.toUpperCase();" />
                                </div>
                            </div>

                            <!-- CATEGORÍA -->
                            <div class="form-group col-lg-6">
                                <label for="modal_id_categoria" class="form-label">Categoría</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="bx bx-menu"></i></span>
                                    <select class="form-select" name="id_categoria" id="modal_id_categoria" required>
                                        <option value="">Seleccionar Categoría...</option>
                                        <?php foreach ($categorias as $categoria): ?>
                                        <option value="<?= $categoria['id'] ?>">
                                            <?= htmlspecialchars($categoria['nombre']) ?></option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                            </div>

                            <!-- MARCA -->
                            <div class="form-group col-lg-6">
                                <label for="modal_id_marca" class="form-label">Marca</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="bx bx-purchase-tag"></i></span>
                                    <select class="form-select" name="id_marca" id="modal_id_marca" required>
                                        <option value="">Seleccionar Marca...</option>
                                        <?php foreach ($marcas as $marca): ?>
                                        <option value="<?= $marca['id'] ?>"><?= htmlspecialchars($marca['nombre']) ?>
                                        </option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                            </div>

                            <!-- PRECIO -->
                            <div class="form-group col-lg-4">
                                <label class="form-label" for="modal_precio">Precio</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="bx bx-dollar"></i></span>
                                    <input type="number" required class="form-control" name="precio" id="modal_precio"
                                        step="0.01" min="0" />
                                </div>
                            </div>

                            <!-- STOCK -->
                            <div class="form-group col-lg-4">
                                <label class="form-label" for="modal_stock_update">Stock</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="bx bx-box"></i></span>
                                    <input type="number" required class="form-control" name="stock"
                                        id="modal_stock_update" min="0" />
                                </div>
                            </div>

                            <!-- MEDIDA -->
                            <div class="form-group col-lg-4">
                                <label for="modal_id_medida" class="form-label">Medida</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="bx bx-ruler"></i></span>
                                    <select class="form-select" name="id_medida" id="modal_id_medida">
                                        <option value="">Seleccionar Medida...</option>
                                        <?php foreach ($medidas as $medida): ?>
                                        <option value="<?= $medida['id'] ?>"><?= htmlspecialchars($medida['medida']) ?>
                                        </option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                            </div>

                            <!-- ESTADO -->
                            <div class="form-group col-lg-12">
                                <label for="modal_status" class="form-label">Estado</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="bx bx-check-circle"></i></span>
                                    <select class="form-select" name="status" id="modal_status" required>
                                        <?php foreach ($estados_se as $estado_se): ?>
                                        <option value="<?= htmlspecialchars($estado_se['estado']) ?>">
                                            <?= htmlspecialchars($estado_se['estado']) ?>
                                        </option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                            </div>

                            <!-- DESCRIPCIÓN -->
                            <div class="form-group col-lg-12">
                                <label class="form-label" for="modal_descripcion">Descripción</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="bx bx-align-left"></i></span>
                                    <textarea class="form-control" name="descripcion" id="modal_descripcion"
                                        rows="3"></textarea>
                                </div>
                            </div>

                            <!-- ========================================= -->
                            <!-- IMÁGENES ACTUALES DEL PRODUCTO -->
                            <!-- ========================================= -->
                            <div class="form-group col-lg-12">
                                <label class="form-label">Imágenes Actuales</label>
                                <div id="imagenes-actuales" class="d-flex gap-3 flex-wrap">
                                    <!-- Se cargarán dinámicamente con JavaScript -->
                                </div>
                            </div>

                            <!-- AGREGAR NUEVAS IMÁGENES -->
                            <div class="form-group col-lg-12">
                                <label class="form-label" for="imagenes_nuevas">Agregar Nuevas Imágenes</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                        <i class="bx bx-image-add"></i>
                                    </span>
                                    <input type="file" class="form-control" name="imagenes_nuevas[]"
                                        id="imagenes_nuevas"
                                        accept="image/jpeg,image/jpg,image/png,image/gif,image/webp" multiple>
                                </div>
                                <small class="text-muted">
                                    <i class="bx bx-info-circle"></i> Máximo 3 imágenes en total. Tamaño total máximo:
                                    10KB
                                </small>
                                <div id="preview-imagenes-nuevas" class="mt-2 d-flex gap-2 flex-wrap"></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                            <i class="bx bx-home"></i> Cancelar
                        </button>
                        <button type="submit" class="btn btn-primary">
                            <i class="bx bx-refresh"></i> Actualizar
                        </button>
                        <input type="hidden" value="formUpdateProduct" name="MM_formUpdateProduct">
                    </div>
                </div>
            </form>
        </div>
    </div>

    <?php require_once "../components/footer.php"; ?>

    <script>
    $(document).ready(function() {
        // =====================================================
        // PREVIEW DE IMÁGENES EN MODAL DE REGISTRO
        // =====================================================
        $('#imagenes').on('change', function(e) {
            const files = e.target.files;
            const preview = $('#preview-imagenes');
            preview.empty();

            if (files.length > 3) {
                alert('Solo puedes seleccionar máximo 3 imágenes');
                $(this).val('');
                return;
            }

            let totalSize = 0;
            const maxSize = 10240; // 10KB en bytes

            for (let i = 0; i < files.length; i++) {
                totalSize += files[i].size;

                const reader = new FileReader();
                reader.onload = function(event) {
                    const img = $('<img>').attr('src', event.target.result).css({
                        'width': '80px',
                        'height': '80px',
                        'object-fit': 'cover',
                        'border': '2px solid #ddd',
                        'border-radius': '5px'
                    });
                    preview.append(img);
                }
                reader.readAsDataURL(files[i]);
            }

            if (totalSize > maxSize) {
                const totalKB = (totalSize / 1024).toFixed(2);
                alert(`El tamaño total de las imágenes (${totalKB}KB) supera el límite de 10KB`);
                $(this).val('');
                preview.empty();
            }
        });

        // =====================================================
        // PREVIEW DE NUEVAS IMÁGENES EN MODAL DE ACTUALIZACIÓN
        // =====================================================
        $('#imagenes_nuevas').on('change', function(e) {
            const files = e.target.files;
            const preview = $('#preview-imagenes-nuevas');
            preview.empty();

            if (files.length > 3) {
                alert('Solo puedes seleccionar máximo 3 imágenes');
                $(this).val('');
                return;
            }

            let totalSize = 0;
            const maxSize = 10240;

            for (let i = 0; i < files.length; i++) {
                totalSize += files[i].size;

                const reader = new FileReader();
                reader.onload = function(event) {
                    const img = $('<img>').attr('src', event.target.result).css({
                        'width': '80px',
                        'height': '80px',
                        'object-fit': 'cover',
                        'border': '2px solid #ddd',
                        'border-radius': '5px'
                    });
                    preview.append(img);
                }
                reader.readAsDataURL(files[i]);
            }

            if (totalSize > maxSize) {
                const totalKB = (totalSize / 1024).toFixed(2);
                alert(`El tamaño total (${totalKB}KB) supera el límite de 10KB`);
                $(this).val('');
                preview.empty();
            }
        });

        // =====================================================
        // CARGAR DATOS EN MODAL DE ACTUALIZACIÓN
        // =====================================================
        $('#tablaProductos').on('click', '.btn-edit', function() {
            var $row = $(this).closest('tr');

            var id = $row.data('id');
            var codigo = $row.data('codigo');
            var nombre = $row.data('nombre');
            var descripcion = $row.data('descripcion');
            var precio = $row.data('precio');
            var stock = $row.data('stock');
            var id_marca = $row.data('id_marca');
            var id_medida = $row.data('id_medida');
            var id_categoria = $row.data('id_categoria');
            var status = $row.data('status');

            $('#modal_id_producto').val(id);
            $('#modal_codigo_original').val(codigo);
            $('#modal_codigo').val(codigo);
            $('#modal_nombre').val(nombre);
            $('#modal_descripcion').val(descripcion);
            $('#modal_precio').val(precio);
            $('#modal_stock_update').val(stock);
            $('#modal_id_marca').val(id_marca);
            $('#modal_id_medida').val(id_medida || '');
            $('#modal_id_categoria').val(id_categoria);
            $('#modal_status').val(status);

            // =====================================================
            // CARGAR IMÁGENES ACTUALES DEL PRODUCTO VÍA AJAX
            // =====================================================
            $.ajax({
                url: '../controllers/GetImagenesProducto.php',
                method: 'POST',
                data: {
                    codigo: codigo
                },
                dataType: 'json',
                success: function(response) {
                    const container = $('#imagenes-actuales');
                    container.empty();
                    console.log(response);
                    if (response.success && response.imagenes.length > 0) {
                        response.imagenes.forEach(function(img) {
                            const imgCard = `
                                <div class="position-relative imagen-item" style="width: 120px;" data-img-id="${img.id}">
                                    <img src="../../uploads/productos/${img.url}" 
                                         class="img-thumbnail" 
                                         style="width: 120px; height: 120px; object-fit: cover;">
                                    <button type="button" 
                                            class="btn btn-danger btn-sm position-absolute top-0 end-0 btn-marcar-eliminar" 
                                            data-id="${img.id}"
                                            style="padding: 2px 6px; font-size: 10px;">
                                        <i class="bx bx-x"></i>
                                    </button>
                                    <input type="hidden" name="imagenes_mantener[]" value="${img.id}" class="img-mantener">
                                </div>
                            `;
                            container.append(imgCard);
                        });
                    } else {
                        container.html(
                            '<p class="text-muted"><i class="bx bx-image-alt"></i> No hay imágenes cargadas</p>'
                        );
                    }
                },
                error: function(xhr, status, error) {
                    console.error('Error AJAX:', error);
                    console.error('Response:', xhr.responseText);
                    $('#imagenes-actuales').html(
                        '<p class="text-danger"><i class="bx bx-error"></i> Error al cargar las imágenes. Verifica la consola para más detalles.</p>'
                    );
                }
            });

            var updateModal = new bootstrap.Modal(document.getElementById('modalUpdateProduct'));
            updateModal.show();
        });

        // =====================================================
        // ELIMINAR IMAGEN INDIVIDUAL
        // =====================================================
        $(document).on('click', '.btn-delete-image', function() {
            if (!confirm('¿Estás seguro de eliminar esta imagen?')) {
                return;
            }

            const idImagen = $(this).data('id');
            const idProducto = $(this).data('producto');
            const $imgContainer = $(this).closest('.position-relative');

            $.ajax({
                url: '../controllers/ProductosController.php',
                method: 'POST',
                data: {
                    MM_formDeleteImage: 'formDeleteImage',
                    id_imagen: idImagen,
                    id_producto: idProducto
                },
                success: function(response) {
                    $imgContainer.fadeOut(300, function() {
                        $(this).remove();

                        if ($('#imagenes-actuales').children().length === 0) {
                            $('#imagenes-actuales').html(
                                '<p class="text-muted"><i class="bx bx-image-alt"></i> No hay imágenes cargadas</p>'
                            );
                        }
                    });
                },
                error: function() {
                    alert('Error al eliminar la imagen');
                }
            });
        });
    });
    </script>



ProductosController.php:

<?php
// ========================================================================
// REGISTRO DE PRODUCTO CON IMÁGENES
// ========================================================================
if (isset($_POST["MM_formRegisterProduct"]) && $_POST["MM_formRegisterProduct"] == "formRegisterProduct") {
    // VARIABLES DE ASIGNACION DE VALORES QUE SE ENVIAN DEL FORMULARIO
    $codigo = trim($_POST['codigo']);
    $nombre = trim($_POST['nombre']);
    $descripcion = !empty(trim($_POST['descripcion'])) ? trim($_POST['descripcion']) : null;
    $precio = trim($_POST['precio']);
    $stock = trim($_POST['stock']);
    $id_marca = !empty($_POST['id_marca']) ? trim($_POST['id_marca']) : null;
    $id_medida = !empty($_POST['id_medida']) ? trim($_POST['id_medida']) : null;
    $id_categoria = !empty($_POST['id_categoria']) ? trim($_POST['id_categoria']) : null;
    $status = trim($_POST['status']);

    // Obtener el nombre completo del usuario logueado
    $nombreCompleto = $_SESSION['names'] . ' ' . $_SESSION['surnames'] . ' (' . $_SESSION['documento'] . ')';

    // VALIDACIÓN: Campos obligatorios
    if (isEmpty([$codigo, $nombre, $precio, $stock, $status, $id_marca, $id_categoria])) {
        showErrorFieldsEmpty("productos.php");
        exit();
    }
    
    // VALIDACIÓN: El precio debe ser mayor a 0
    if ($precio <= 0) {
        showErrorOrSuccessAndRedirect("error", "Error de validación", "El precio debe ser mayor a 0", "productos.php");
        exit();
    }

    // VALIDACIÓN: El stock no puede ser negativo
    if ($stock < 0) {
        showErrorOrSuccessAndRedirect("error", "Error de validación", "El stock no puede ser negativo", "productos.php");
        exit();
    }
    
    // VALIDACIÓN: Verificar que el código no esté duplicado
    $productoQueryFetch = $connection->prepare("SELECT * FROM productos WHERE codigo = :codigo");
    $productoQueryFetch->bindParam(':codigo', $codigo);
    $productoQueryFetch->execute();
    
    if ($productoQueryFetch->rowCount() > 0) {
        showErrorOrSuccessAndRedirect("error", "Error de registro", "El código ingresado ya está registrado", "productos.php");
        exit();
    }

    // VALIDACIÓN: Verificar que la marca exista
    $checkMarca = $connection->prepare("SELECT id FROM marcas WHERE id = :id_marca");
    $checkMarca->bindParam(':id_marca', $id_marca);
    $checkMarca->execute();
    if (!$checkMarca->fetch()) {
        showErrorOrSuccessAndRedirect("error", "Error de validación", "La marca seleccionada no existe", "productos.php");
        exit();
    }

    // VALIDACIÓN: Verificar que la categoría exista
    $checkCategoria = $connection->prepare("SELECT id FROM categorias WHERE id = :id_categoria");
    $checkCategoria->bindParam(':id_categoria', $id_categoria);
    $checkCategoria->execute();
    if (!$checkCategoria->fetch()) {
        showErrorOrSuccessAndRedirect("error", "Error de validación", "La categoría seleccionada no existe", "productos.php");
        exit();
    }

    // VALIDACIÓN OPCIONAL: Si se seleccionó medida, verificar que exista
    if ($id_medida !== null) {
        $checkMedida = $connection->prepare("SELECT id FROM medidas WHERE id = :id_medida");
        $checkMedida->bindParam(':id_medida', $id_medida);
        $checkMedida->execute();
        if (!$checkMedida->fetch()) {
            showErrorOrSuccessAndRedirect("error", "Error de validación", "La medida seleccionada no existe", "productos.php");
            exit();
        }
    }

    // =====================================================================
    // VALIDACIÓN Y PROCESAMIENTO DE IMÁGENES
    // =====================================================================
    $imagenesValidas = [];
    $tamañoTotal = 0;
    $maxTamañoTotal = 10240; // 10KB en bytes
    $carpetaDestino = "../../uploads/productos/";
    
    // Crear carpeta si no existe
    if (!file_exists($carpetaDestino)) {
        mkdir($carpetaDestino, 0777, true);
    }

    // Verificar si se subieron imágenes
    if (isset($_FILES['imagenes']) && !empty($_FILES['imagenes']['name'][0])) {
        $cantidadImagenes = count($_FILES['imagenes']['name']);
        
        // VALIDACIÓN: Máximo 3 imágenes
        if ($cantidadImagenes > 3) {
            showErrorOrSuccessAndRedirect("error", "Error de imágenes", "Solo puedes subir máximo 3 imágenes", "productos.php");
            exit();
        }

        // Procesar cada imagen
        for ($i = 0; $i < $cantidadImagenes; $i++) {
            $nombreArchivo = $_FILES['imagenes']['name'][$i];
            $tmpArchivo = $_FILES['imagenes']['tmp_name'][$i];
            $tamañoArchivo = $_FILES['imagenes']['size'][$i];
            $errorArchivo = $_FILES['imagenes']['error'][$i];

            // Verificar si hay error en la subida
            if ($errorArchivo !== UPLOAD_ERR_OK) {
                continue; // Saltar este archivo
            }

            // Sumar tamaño
            $tamañoTotal += $tamañoArchivo;

            // Validar extensión
            $extension = strtolower(pathinfo($nombreArchivo, PATHINFO_EXTENSION));
            $extensionesPermitidas = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
            
            if (!in_array($extension, $extensionesPermitidas)) {
                showErrorOrSuccessAndRedirect("error", "Error de formato", "Solo se permiten imágenes JPG, PNG, GIF o WEBP", "productos.php");
                exit();
            }

            // Generar nombre único para la imagen
            $nuevoNombre = $codigo . '_' . time() . '_' . $i . '.' . $extension;
            $rutaDestino = $carpetaDestino . $nuevoNombre;

            // Guardar información
            $imagenesValidas[] = [
                'nombre' => $nuevoNombre,
                'tmp' => $tmpArchivo,
                'ruta' => $rutaDestino
            ];
        }

        // VALIDACIÓN: Verificar tamaño total
        if ($tamañoTotal > $maxTamañoTotal) {
            $tamañoTotalKB = round($tamañoTotal / 1024, 2);
            showErrorOrSuccessAndRedirect("error", "Error de tamaño", "El tamaño total de las imágenes ({$tamañoTotalKB}KB) supera el límite de 10KB", "productos.php");
            exit();
        }
    }

    // =====================================================================
    // INSERTAR PRODUCTO EN LA BASE DE DATOS
    // =====================================================================
    try {
        $connection->beginTransaction();

        $registerProduct = $connection->prepare("INSERT INTO productos(codigo, nombre, descripcion, precio, stock, id_marca, id_medida, id_categoria, status, usuario_crea) 
                                                 VALUES(:codigo, :nombre, :descripcion, :precio, :stock, :id_marca, :id_medida, :id_categoria, :status, :usuario_crea)");
        $registerProduct->bindParam(':codigo', $codigo);
        $registerProduct->bindParam(':nombre', $nombre);
        $registerProduct->bindParam(':descripcion', $descripcion);
        $registerProduct->bindParam(':precio', $precio);
        $registerProduct->bindParam(':stock', $stock);
        $registerProduct->bindParam(':id_marca', $id_marca);
        $registerProduct->bindParam(':id_medida', $id_medida);
        $registerProduct->bindParam(':id_categoria', $id_categoria);
        $registerProduct->bindParam(':status', $status);
        $registerProduct->bindParam(':usuario_crea', $nombreCompleto);
        $registerProduct->execute();

        // Mover imágenes y registrar en la base de datos
        if (!empty($imagenesValidas)) {
            foreach ($imagenesValidas as $imagen) {
                // Mover archivo al servidor
                if (move_uploaded_file($imagen['tmp'], $imagen['ruta'])) {
                    // Insertar en la tabla img_productos
                    $insertImagen = $connection->prepare("INSERT INTO img_productos(url, cod_producto, estado, usuario_crea) VALUES(:url, :cod_producto, :estado, :usuario_crea)");
                    $insertImagen->bindParam(':url', $imagen['nombre']);
                    $insertImagen->bindParam(':cod_producto', $codigo);
                    $insertImagen->bindValue(':estado', 'activo');
                    $insertImagen->bindParam(':usuario_crea', $nombreCompleto);
                    $insertImagen->execute();
                }
            }
        }

        $connection->commit();
        showErrorOrSuccessAndRedirect("success", "Registro Exitoso", "El producto se ha registrado correctamente", "productos.php");
        exit();
        
    } catch (PDOException $e) {
        $connection->rollBack();
        
        // Eliminar imágenes si hubo error
        foreach ($imagenesValidas as $imagen) {
            if (file_exists($imagen['ruta'])) {
                unlink($imagen['ruta']);
            }
        }
        
        showErrorOrSuccessAndRedirect("error", "Error de Base de Datos", "Error: " . $e->getMessage(), "productos.php");
        exit();
    }
}

// ========================================================================
// ACTUALIZAR PRODUCTO CON IMÁGENES Y LIMPIEZA AUTOMÁTICA
// ========================================================================
if (isset($_POST["MM_formUpdateProduct"]) && $_POST["MM_formUpdateProduct"] === "formUpdateProduct") {
    $id_producto = trim($_POST['id_producto']);
    $codigo_original = trim($_POST['codigo_original']);
    $codigo = trim($_POST['codigo']);
    $nombre = trim($_POST['nombre']);
    $descripcion = !empty(trim($_POST['descripcion'])) ? trim($_POST['descripcion']) : null;
    $precio = trim($_POST['precio']);
    $stock = trim($_POST['stock']);
    $id_marca = !empty($_POST['id_marca']) ? trim($_POST['id_marca']) : null;
    $id_medida = !empty($_POST['id_medida']) ? trim($_POST['id_medida']) : null;
    $id_categoria = !empty($_POST['id_categoria']) ? trim($_POST['id_categoria']) : null;
    $status = trim($_POST['status']);
    
    $nombreCompleto = $_SESSION['names'] . ' ' . $_SESSION['surnames'] . ' (' . $_SESSION['documento'] . ')';

    // VALIDACIONES
    if (isEmpty([$id_producto, $codigo, $nombre, $precio, $stock, $status, $id_marca, $id_categoria])) {
        showErrorFieldsEmpty("productos.php");
        exit();
    }

    if ($precio <= 0) {
        showErrorOrSuccessAndRedirect("error", "Error de validación", "El precio debe ser mayor a 0", "productos.php");
        exit();
    }

    if ($stock < 0) {
        showErrorOrSuccessAndRedirect("error", "Error de validación", "El stock no puede ser negativo", "productos.php");
        exit();
    }

    // Verificar producto existe
    $productoQueryCheck = $connection->prepare("SELECT * FROM productos WHERE id = :id");
    $productoQueryCheck->bindParam(':id', $id_producto);
    $productoQueryCheck->execute();
    $existingProducto = $productoQueryCheck->fetch(PDO::FETCH_ASSOC);

    if (!$existingProducto) {
        showErrorOrSuccessAndRedirect("error", "Producto no encontrado", "El producto que intenta actualizar no existe", "productos.php");
        exit();
    }

    // Si cambió el código, verificar que no exista
    if ($codigo !== $codigo_original) {
        $productoQueryCheckCodigo = $connection->prepare("SELECT * FROM productos WHERE codigo = :codigo AND id != :id");
        $productoQueryCheckCodigo->bindParam(':codigo', $codigo);
        $productoQueryCheckCodigo->bindParam(':id', $id_producto);
        $productoQueryCheckCodigo->execute();

        if ($productoQueryCheckCodigo->rowCount() > 0) {
            showErrorOrSuccessAndRedirect("error", "Código ya existente", "El código ingresado ya pertenece a otro producto", "productos.php");
            exit();
        }
    }

    // =====================================================================
    // OBTENER IMÁGENES ACTUALES PARA COMPARAR
    // =====================================================================
    $imagenesActualesQuery = $connection->prepare("SELECT id, url FROM img_productos WHERE cod_producto = :codigo AND estado = 'activo'");
    $imagenesActualesQuery->bindParam(':codigo', $codigo_original);
    $imagenesActualesQuery->execute();
    $imagenesActualesDB = $imagenesActualesQuery->fetchAll(PDO::FETCH_ASSOC);
    
    // Crear array con IDs de imágenes a mantener (las que NO fueron marcadas para eliminar)
    $imagenesAMantener = isset($_POST['imagenes_mantener']) ? $_POST['imagenes_mantener'] : [];

    // =====================================================================
    // PROCESAMIENTO DE NUEVAS IMÁGENES
    // =====================================================================
    $imagenesValidas = [];
    $carpetaDestino = "../../uploads/productos/";
    
    if (isset($_FILES['imagenes_nuevas']) && !empty($_FILES['imagenes_nuevas']['name'][0])) {
        // Contar imágenes que se van a mantener
        $cantidadActual = count($imagenesAMantener);
        $cantidadNuevas = count($_FILES['imagenes_nuevas']['name']);
        $totalImagenes = $cantidadActual + $cantidadNuevas;

        // VALIDACIÓN: Máximo 3 imágenes en total
        if ($totalImagenes > 3) {
            showErrorOrSuccessAndRedirect("error", "Error de imágenes", "Solo puedes tener máximo 3 imágenes en total. Actualmente mantienes {$cantidadActual}.", "productos.php");
            exit();
        }

        $tamañoTotal = 0;
        $maxTamañoTotal = 10240; // 10KB

        for ($i = 0; $i < $cantidadNuevas; $i++) {
            $nombreArchivo = $_FILES['imagenes_nuevas']['name'][$i];
            $tmpArchivo = $_FILES['imagenes_nuevas']['tmp_name'][$i];
            $tamañoArchivo = $_FILES['imagenes_nuevas']['size'][$i];
            $errorArchivo = $_FILES['imagenes_nuevas']['error'][$i];

            if ($errorArchivo !== UPLOAD_ERR_OK) {
                continue;
            }

            $tamañoTotal += $tamañoArchivo;

            $extension = strtolower(pathinfo($nombreArchivo, PATHINFO_EXTENSION));
            $extensionesPermitidas = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
            
            if (!in_array($extension, $extensionesPermitidas)) {
                showErrorOrSuccessAndRedirect("error", "Error de formato", "Solo se permiten imágenes JPG, PNG, GIF o WEBP", "productos.php");
                exit();
            }

            $nuevoNombre = $codigo . '_' . time() . '_' . $i . '.' . $extension;
            $rutaDestino = $carpetaDestino . $nuevoNombre;

            $imagenesValidas[] = [
                'nombre' => $nuevoNombre,
                'tmp' => $tmpArchivo,
                'ruta' => $rutaDestino
            ];
        }

        if ($tamañoTotal > $maxTamañoTotal) {
            $tamañoTotalKB = round($tamañoTotal / 1024, 2);
            showErrorOrSuccessAndRedirect("error", "Error de tamaño", "El tamaño total de las nuevas imágenes ({$tamañoTotalKB}KB) supera el límite de 10KB", "productos.php");
            exit();
        }
    }

    // =====================================================================
    // ACTUALIZAR PRODUCTO Y GESTIONAR IMÁGENES
    // =====================================================================
    try {
        $connection->beginTransaction();

        // Actualizar datos del producto
        $updateProduct = $connection->prepare("UPDATE productos 
                                               SET codigo = :codigo, 
                                                   nombre = :nombre, 
                                                   descripcion = :descripcion, 
                                                   precio = :precio, 
                                                   stock = :stock, 
                                                   id_marca = :id_marca, 
                                                   id_medida = :id_medida, 
                                                   id_categoria = :id_categoria, 
                                                   status = :status 
                                               WHERE id = :id");
        $updateProduct->bindParam(':codigo', $codigo);
        $updateProduct->bindParam(':nombre', $nombre);
        $updateProduct->bindParam(':descripcion', $descripcion);
        $updateProduct->bindParam(':precio', $precio);
        $updateProduct->bindParam(':stock', $stock);
        $updateProduct->bindParam(':id_marca', $id_marca);
        $updateProduct->bindParam(':id_medida', $id_medida);
        $updateProduct->bindParam(':id_categoria', $id_categoria);
        $updateProduct->bindParam(':status', $status);
        $updateProduct->bindParam(':id', $id_producto);
        $updateProduct->execute();

        // =====================================================================
        // ELIMINAR IMÁGENES QUE YA NO SE USAN (OPTIMIZACIÓN)
        // =====================================================================
        foreach ($imagenesActualesDB as $imgActual) {
            // Si la imagen NO está en el array de imágenes a mantener, eliminarla
            if (!in_array($imgActual['id'], $imagenesAMantener)) {
                // Eliminar archivo físico
                $rutaArchivo = $carpetaDestino . $imgActual['url'];
                if (file_exists($rutaArchivo)) {
                    unlink($rutaArchivo);
                }
                
                // Eliminar registro de la base de datos
                $deleteImg = $connection->prepare("DELETE FROM img_productos WHERE id = :id");
                $deleteImg->bindParam(':id', $imgActual['id']);
                $deleteImg->execute();
            }
        }

        // Si cambió el código, actualizar referencias en img_productos
        if ($codigo !== $codigo_original) {
            $updateCodigoImg = $connection->prepare("UPDATE img_productos SET cod_producto = :nuevo_codigo WHERE cod_producto = :codigo_original");
            $updateCodigoImg->bindParam(':nuevo_codigo', $codigo);
            $updateCodigoImg->bindParam(':codigo_original', $codigo_original);
            $updateCodigoImg->execute();
        }

        // Guardar nuevas imágenes
        if (!empty($imagenesValidas)) {
            foreach ($imagenesValidas as $imagen) {
                if (move_uploaded_file($imagen['tmp'], $imagen['ruta'])) {
                    $insertImagen = $connection->prepare("INSERT INTO img_productos(url, cod_producto, estado, usuario_crea) VALUES(:url, :cod_producto, :estado, :usuario_crea)");
                    $insertImagen->bindParam(':url', $imagen['nombre']);
                    $insertImagen->bindParam(':cod_producto', $codigo);
                    $insertImagen->bindValue(':estado', 'activo');
                    $insertImagen->bindParam(':usuario_crea', $nombreCompleto);
                    $insertImagen->execute();
                }
            }
        }

        $connection->commit();
        showErrorOrSuccessAndRedirect("success", "Actualización Exitosa", "Los datos del producto se han actualizado correctamente", "productos.php");
        exit();
        
    } catch (PDOException $e) {
        $connection->rollBack();
        showErrorOrSuccessAndRedirect("error", "Error de Base de Datos", "Error: " . $e->getMessage(), "productos.php");
        exit();
    }
}

// ========================================================================
// ELIMINAR IMAGEN INDIVIDUAL
// ========================================================================
if (isset($_POST["MM_formDeleteImage"]) && $_POST["MM_formDeleteImage"] == "formDeleteImage") {
    $id_imagen = trim($_POST['id_imagen']);
    $carpetaDestino = "../../uploads/productos/";

    // Obtener información de la imagen
    $getImagen = $connection->prepare("SELECT url FROM img_productos WHERE id = :id");
    $getImagen->bindParam(':id', $id_imagen);
    $getImagen->execute();
    $imagen = $getImagen->fetch(PDO::FETCH_ASSOC);

    if ($imagen) {
        // Eliminar archivo físico
        $rutaArchivo = $carpetaDestino . $imagen['url'];
        if (file_exists($rutaArchivo)) {
            unlink($rutaArchivo);
        }

        // Eliminar de la base de datos
        $deleteImagen = $connection->prepare("DELETE FROM img_productos WHERE id = :id");
        $deleteImagen->bindParam(':id', $id_imagen);
        $deleteImagen->execute();

        showErrorOrSuccessAndRedirect("success", "Imagen Eliminada", "La imagen se ha eliminado correctamente", "productos.php?id=" . $_POST['id_producto']);
    } else {
        showErrorOrSuccessAndRedirect("error", "Error", "La imagen no existe", "productos.php");
    }
    exit();
}

// ========================================================================
// ELIMINAR PRODUCTO
// ========================================================================
if (isset($_POST["MM_formDeleteProduct"]) && $_POST["MM_formDeleteProduct"] == "formDeleteProduct") {
    $id_producto = trim($_POST['id_producto']);
    $carpetaDestino = "../../uploads/productos/";

    if (empty($id_producto)) {
        showErrorOrSuccessAndRedirect("error", "Error de Eliminación", "ID no válido", "productos.php");
        exit();
    }

    $checkProduct = $connection->prepare("SELECT codigo FROM productos WHERE id = :id");
    $checkProduct->bindParam(':id', $id_producto);
    $checkProduct->execute();
    $productExists = $checkProduct->fetch(PDO::FETCH_ASSOC);

    if (!$productExists) {
        showErrorOrSuccessAndRedirect("error", "Producto no encontrado", "El producto que intenta eliminar no existe", "productos.php");
        exit();
    }

    try {
        $connection->beginTransaction();

        // Obtener y eliminar imágenes físicas
        $getImagenes = $connection->prepare("SELECT url FROM img_productos WHERE cod_producto = :codigo");
        $getImagenes->bindParam(':codigo', $productExists['codigo']);
        $getImagenes->execute();
        $imagenes = $getImagenes->fetchAll(PDO::FETCH_ASSOC);

        foreach ($imagenes as $img) {
            $rutaArchivo = $carpetaDestino . $img['url'];
            if (file_exists($rutaArchivo)) {
                unlink($rutaArchivo);
            }
        }

        // Eliminar registros de imágenes
        $deleteImagenes = $connection->prepare("DELETE FROM img_productos WHERE cod_producto = :codigo");
        $deleteImagenes->bindParam(':codigo', $productExists['codigo']);
        $deleteImagenes->execute();

        // Eliminar producto
        $query = $connection->prepare("DELETE FROM productos WHERE id = :id");
        $query->bindParam(':id', $id_producto);
        $query->execute();

        $connection->commit();
        showErrorOrSuccessAndRedirect("success", "Eliminado", "El producto y sus imágenes se han eliminado correctamente", "productos.php");
        exit();
        
    } catch (PDOException $e) {
        $connection->rollBack();
        if ($e->getCode() == '23000') {
            showErrorOrSuccessAndRedirect("error", "No se puede eliminar", "Este producto está relacionado con otros registros", "productos.php");
        } else {
            showErrorOrSuccessAndRedirect("error", "Error de Base de Datos", "Error: " . $e->getMessage(), "productos.php");
        }
        exit();
    }
}
?>