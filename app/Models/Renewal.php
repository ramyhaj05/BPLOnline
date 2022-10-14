<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Renewal extends Model
{
    use HasFactory;
    protected $fillable = [
        'account_number',
        'gross_income',
        'owners_name',
        'contact',
        'email',
        'status',
        'user_id',
    ];
}
