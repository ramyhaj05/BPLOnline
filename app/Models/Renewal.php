<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Renewal extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = [
        'account_number',
        'trans_id',
        'gross_income',
        'owners_name',
        'contact',
        'email',
        'status',
        'year',
        'gross_income',
        'user_id',
        'itr',
        'brgy',
    ];
}
