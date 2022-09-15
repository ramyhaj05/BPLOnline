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
        'franchise',
        'leasing',
        'owner_name',
        'contact',
        'email'
    ];
}
