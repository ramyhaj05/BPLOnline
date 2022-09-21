<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BusinessApplication extends Model
{
    use HasFactory;
    protected $fillable = [
        'business_name',
        'capital_investment',
        'description',
        'business_type',
        'franchise',
        'leasing',
        'owner_name',
        'contact',
        'user_id',
        'status',
        'email'
    ];
}
