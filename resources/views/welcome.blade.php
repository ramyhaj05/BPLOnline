<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
    </head>
    <body class="antialiased" >
        <div class="relative flex items-top justify-center min-h-screen bg-emerald-100 bg-gray-900 sm:items-center py-4 sm:pt-0">
            @if (Route::has('login'))
                <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    @auth
                        <a href="{{ url('/home') }}" class="text-sm text-white dark:text-white underline">Home</a>
                    @else
                        <a href="{{ route('login') }}" class="text-sm text-white dark:text-white underline">Log in</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}" class="ml-4 text-sm text-white dark:text-white underline">Register</a>
                        @endif
                    @endauth
                </div>
            @endif
            <div class="w-full flex flex-col md:flex-row">
                <div class="md:w-1/2 w-full flex justify-center">
                    <!-- <img src="{{asset('/images/Homebg2.png')}}" alt="" class=" w-full"> -->
                </div>
                
                <div class="md:w-1/2 w-full">
                    asdasd
                </div>
            </div>
        </div>
    </body>
</html>
