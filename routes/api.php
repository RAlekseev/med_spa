<?php

use App\Modules\Common\Controllers\SearchController;
use App\Modules\Configs\Controllers\ConfigController;
use App\Modules\Services\Controllers\CategoryController;
use App\Modules\Contracts\Controllers\ContractController;
use App\Modules\Contracts\Controllers\PatientContractController;
use App\Modules\Services\Controllers\GuestServiceController;
use App\Modules\Services\Controllers\ServiceController;
use App\Modules\WorkingHour\Controllers\WorkingHourController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Modules\Users\Controllers\UserController;
use \App\Modules\Auth\Controllers\LoginController;
use \App\Modules\Auth\Controllers\RegistrationController;
use \App\Modules\Access\Controllers\RoleController;
use \App\Modules\Access\Controllers\PermissionController;
use \App\Modules\DocTemplates\Controllers\DocTemplateController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth'])->group(function () {
    Route::apiResource('/permissions', PermissionController::class);
    Route::apiResource('/roles', RoleController::class);

    Route::get('users/employees', [UserController::class, 'employees']);
    Route::get('users/change_pass/{id}', [UserController::class, 'change_pass']);
    Route::apiResource('/users', UserController::class);

    Route::apiResource('/categories', CategoryController::class);
    Route::apiResource('/services', ServiceController::class);

    Route::apiResource('/contracts', ContractController::class);

    Route::apiResource('/working_hours', WorkingHourController::class);
    Route::apiResource('/patient/contracts', PatientContractController::class)->except(['destroy']);
    Route::patch('/configs/{config}', [ConfigController::class, 'update']);
    Route::apiResource('/doc_templates', DocTemplateController::class);
});

Route::get('/configs', [ConfigController::class, 'index']);
Route::apiResource('/guest_services', GuestServiceController::class)->except(['store', 'update', 'destroy']);
Route::post('search', [SearchController::class, 'index']);

Route::post('login', [LoginController::class, 'login']);
Route::post('registration', [RegistrationController::class, 'register']);



