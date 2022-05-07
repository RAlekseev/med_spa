<?php

namespace App\Modules\Contracts\Models;

use App\Models\User;
use App\Modules\Services\Models\Service;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;


class Contract extends Model implements HasMedia
{
    use InteractsWithMedia;

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('documents');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'patient_id',
    ];

    protected $casts = [
        'created_at' => 'datetime:d.m.Y H:i',
    ];

    public function services()
    {
        return $this->belongsToMany(Service::class, 'contract_service')->withTimestamps();
    }

    public function patient()
    {
        return $this->belongsTo(User::class, 'patient_id');
    }

}
