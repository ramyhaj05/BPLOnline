<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BusinessApplication extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'business_name',
        'business_address',
        'barangay',
        'capital_investment',
        'description',
        'business_type',
        'franchise',
        'leasing',
        'owners_name',
        'owners_address',
        'contact',
        'user_id',
        'status',
        'trans_type',
        'email'
    ];

    protected $dates = ['deleted_at'];

    protected $primaryKey = 'id';
}
