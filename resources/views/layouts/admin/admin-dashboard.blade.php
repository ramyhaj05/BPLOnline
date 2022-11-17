@extends('layouts.admin.admin-layout')

@section('content-admin')
    <div>admin page</div>
    <a class="nav-link tracking-widest text-gray-500" href="{{ url('forverification/admin') }}">{{ __('Login') }}</a>
@endsection